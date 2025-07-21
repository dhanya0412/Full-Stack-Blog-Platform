const express = require('express');
const Router = express.Router();
const Blogs = require('../models/blog');
const Comments = require('../models/comment');
const User = require('../models/user');
const isAdmin = require('../middlewares/isAdmin');
const mongoose = require('mongoose');

Router.get('/dashboard', isAdmin, async (req, res) => {
    const allUsers = await User.find({});
    res.render('admin/dashboard', {
        allUsers: allUsers
    });


});



Router.get('/viewBlogs/:id', isAdmin, async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    const userBlogs = await Blogs.find({ createdBy: new mongoose.Types.ObjectId(id) });

    res.render('admin/viewBlogs', {

        userBlogs: userBlogs
    });
});





module.exports = Router;
