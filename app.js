const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const initializePassport = require('./config/passport');
const blogRoutes = require('./routes/blog');
const commentRoutes = require('./routes/comments');
const port = 3000;
const adminRoutes = require('./routes/admin');
require('dotenv').config();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB Atlas connection error:', err));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(session({ secret: 'secretcode', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

initializePassport(passport);

app.get('/', (req, res) => {
  res.render('index');
});

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


const authRoutes = require('./routes/auth');
app.use(authRoutes);
app.use("/blog", blogRoutes)
app.use('/blog', commentRoutes);
app.use('/admin', adminRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
