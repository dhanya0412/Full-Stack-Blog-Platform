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
    const blog = await Blog.findById(id);
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




router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.redirect('/blog');
})


module.exports = router;
