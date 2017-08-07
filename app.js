const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

// const moon = require('lune');
// alert(current_phase);

// for auth
const methodOverride = require ('method-override');
const cookieParser = require ('cookie-parser');
const session = require ('express-session');
const passport = require ('passport');
const fetch = require('isomorphic-fetch');

const app = express();

// for auth
// require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// for auth
// app.use(cookieParser());
// app.use(session({
//   secret: process.env.SECRET_KEY,
//   resave: false,
//   saveUninitialized: true,
// }));
// app.use(passport.initialize());
// app.use(passport.session());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(`Listening on port ${port}`);
})

// for auth
// app.use(logger('dev'));

app.get('/', function(req, res){
  // res.send('test1')
  res.render('welcome');
});

const moonRoute = require('./routes/moon-route');
app.use('/moon', moonRoute);

const regRoute = require('./routes/register-route');
app.use('/register', regRoute);

app.use('*', function(req, res){
  res.status(400).json({
    message: 'Not found!',
  });
});
