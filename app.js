const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const initializePassport = require('./config/passport');
const blogRoutes = require('./routes/blog');
const port = 3000;
require('dotenv').config();

mongoose.connect(process.env.DB_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB Atlas connection error:', err));


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
app.use("/blog", blogRoutes)

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
