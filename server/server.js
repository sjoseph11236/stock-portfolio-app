const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
// Create an express instance
const app = express();
const { db } = require('./db/');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db });

dbStore.sync();

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (error) {
    done(error);
  }

});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Logging middleware
app.use(morgan('dev'));

// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());



// app.use('/api', require('./routes'));

app.get('/api', (req, res) => { 
  res.send('hello World');
});

// Static middleware
app.use(express.static(path.join(__dirname, '../public')));

// 404 
app.use(function(req, res, next) {
  const err = new Error('not found.');
  err.status = 404; 
  next(err);
});

// 500
app.use((err, req, res) => {
  console.error('This is the error from server.js ', err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal servers error ');
});

module.exports = app;