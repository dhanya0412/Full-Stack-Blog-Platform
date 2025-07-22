const express = require('express');
const Blog = require('../models/blog.js');
const User = require('../models/user.js');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn.js');

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
    const blog = await Blog.findById(req.params.id)
        .populate({
            path: 'comments',
            populate: { path: 'user', select: 'username' }
        });
    const userId = blog.createdBy;
    const blogUser = await User.findById(userId);
    const userName = blogUser.username;

    console.log(userName);

    res.render('blog/fullBlog', {
        user: req.user,
        blog: blog,
        userName
    });
})

router.post('/', isLoggedIn, async (req, res) => {



    const { title, theme, coverImage, body } = req.body;
    await Blog.create({ title, theme, coverImage, body, createdBy: req.user.id })
    res.redirect('/blog');

});

router.get('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.render('blog/edit', { blog });
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const newBody = req.body.newBody;
    await Blog.findByIdAndUpdate(id, { body: newBody });
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
