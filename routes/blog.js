const express = require('express');
const Blog = require('../models/blog.js');
const User = require('../models/user.js');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn.js');
const upload = require('../middlewares/upload.js');
const multer = require('multer');

router.get('/', async (req, res) => {
    const myBlogs = await Blog.find({ createdBy: req.user._id }).sort({ "createdAt": -1 });
    const allBlogs = await Blog.find({}).sort({ "createdAt": -1 });
    res.render('blog/index.ejs',
        {
            user: req.user,
            myblogs: myBlogs,
            allblogs: allBlogs,
            theme: null
        }
    );

})

router.get('/addBlog', (req, res) => {
    res.render('blog/addBlog',
        { user: req.user }
    );
    console.log(req.user.id);
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id)
        .populate({
            path: 'comments',
            populate: { path: 'user', select: 'username' }
        });
    const userId = blog.createdBy;
    const blogUser = await User.findById(userId);
    const userName = blogUser.username;

    // New logic to determine back URL
    let backUrl = '/blog';
    if (req.query.admin === 'true' && req.query.userId) {
        backUrl = `/admin/viewBlogs/${req.query.userId}`;
    }

    res.render('blog/fullBlog', {
        user: req.user,
        blog: blog,
        userName,
        backUrl // pass this to template
    });
});


router.post('/', isLoggedIn, upload.single('coverImage'), async (req, res) => {
    const imagePath = '/uploads/' + req.file.filename;



    const { title, theme, body } = req.body;
    await Blog.create({ title, theme, coverImage: imagePath, body, createdBy: req.user.id })
    res.redirect('/blog');

});

router.get('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.render('blog/edit', { blog });
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, theme, body } = req.body;

    await Blog.findByIdAndUpdate(id, {
        title,
        theme,
        body
    });

    res.redirect('/blog');
});





router.delete('/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (blog) {
        const Comment = require('../models/comment');
        await Comment.deleteMany({ _id: { $in: blog.comments } });
    }
    if (req.user.isAdmin) {
        return res.redirect('/admin/dashboard');
    }
    res.redirect('/blog');
});

router.get('/theme/:category', isLoggedIn, async (req, res) => {
    const category = req.params.category;
    const allBlogs = await Blog.find({ theme: category }).sort({ createdAt: -1 });
    const myBlogs = await Blog.find({ createdBy: req.user._id, theme: category }).sort({ createdAt: -1 });

    res.render('blog/index.ejs', {
        user: req.user,
        allblogs: allBlogs,
        myblogs: myBlogs,
        theme: category
    });
});


module.exports = router;
