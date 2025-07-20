const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');

// Show registration page
router.get('/register', (req, res) => {
  res.render('auth/register');
});

// Handle registration
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

// Show login page
router.get('/login', (req, res) => {
  res.render('auth/login');
});

// Handle login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/blog',
  failureRedirect: '/login',
  failureFlash: true // If using connect-flash
}));

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
