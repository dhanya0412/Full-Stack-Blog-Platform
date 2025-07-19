const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const initializePassport = require('./config/passport');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/blog-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'secretcode', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

initializePassport(passport);

app.get('/', (req, res) => {
  res.render('index');
});

const authRoutes = require('./routes/auth');
app.use(authRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
