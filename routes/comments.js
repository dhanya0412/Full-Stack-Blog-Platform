const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Blog = require('../models/blog');
const isLoggedIn = require('../middlewares/isLoggedIn');

router.post('/:blogId/comments', isLoggedIn, async (req, res) => {
  try {
    const comment = await Comment.create({
      blog: req.params.blogId,
      user: req.user._id,
      content: req.body.content
    });

    await Blog.findByIdAndUpdate(req.params.blogId, {
      $push: { comments: comment._id }
    });

    res.redirect(`/blog/${req.params.blogId}`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Comment couldn't be posted, sorry!!");
  }
});

async function checkCommentOwner(req, res, next) {
  const comment = await Comment.findById(req.params.commentId);
  if (!comment) return res.status(404).send('Comment not found');
  if (comment.user.equals(req.user._id) || req.user.isAdmin) return next();
  res.status(403).send('Not authorized');
}

router.get('/:blogId/comments/:commentId/edit', isLoggedIn, checkCommentOwner, async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);
  res.render('comments/edit', { blogId: req.params.blogId, comment });
});

router.post('/:blogId/comments/:commentId', isLoggedIn, checkCommentOwner, async (req, res) => {
  await Comment.findByIdAndUpdate(req.params.commentId, {
    content: req.body.content
  });
  res.redirect(`/blog/${req.params.blogId}`);
});

router.post('/:blogId/comments/:commentId/delete', isLoggedIn, checkCommentOwner, async (req, res) => {
  await Comment.findByIdAndDelete(req.params.commentId);
  await Blog.findByIdAndUpdate(req.params.blogId, {
    $pull: { comments: req.params.commentId }
  });
  res.redirect(`/blog/${req.params.blogId}`);
});


module.exports = router;
