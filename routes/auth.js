const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');
const isAdmin = require('../middlewares/isAdmin');


router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hash });
    await user.save();
    res.redirect('/login');
  } catch (error) {
    res.render('auth/register', { error: "Username taken or error occurred." });
  }
});


router.get('/login', (req, res) => {
  res.render('auth/login');
});







router.post('/login', passport.authenticate('local', {

  failureRedirect: '/login',
  failureFlash: true 
}), (req, res) => {
  if (req.user.isAdmin) {
    return res.redirect('/admin/dashboard');
  } else {
    return res.redirect('/blog')
  }
});


router.get('/logout', (req, res, next) => {
    console.log("LOGGING OUT");
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
});

module.exports = router;
