const express = require('express');
const Blog = require('../models/blog.js');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn.js');

router.get('/', async (req, res) => {

    const allBlogs = await Blog.find({}).sort({ "createdAt": -1 });
    res.render('blog/index.ejs',
        {
            user: req.user,
            blogs: allBlogs
        }
    );

})

router.get('/addBlog', (req, res) => {
    res.render('blog/addBlog',
        { user: req.user }
    );
    console.log(req.user.id);
})

router.post('/', isLoggedIn, async (req, res) => {



    const { title, theme, coverImage, body } = req.body;
    await Blog.create({ title, theme, coverImage, body, createdBy: req.user.id })
    res.redirect('/blog');

});




router.delete('/', async (req, res) => {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.redirect('/blog');
})
module.exports = router;
