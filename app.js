const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const logger = require('morgan');

const methodOverride = require ('method-override');
const cookieParser = require ('cookie-parser');
const session = require ('express-session');
const passport = require ('passport');
const fetch = require('isomorphic-fetch');

const app = express();

// app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
})

app.get('/', function(req, res){
  // res.send('test1')
  res.render('welcome');
});

// const loginRoute = require('./routes/login-route');
app.use('/login', function(req,res){
  res.render('login')
});

app.use('/register', function(req,res){
  res.render('register')
});

// const regRoute = require('./routes/register-route');
// app.use('/register', regRoute);

app.use('*', function(req, res){
  res.status(400).json({
    message: 'Not found!',
  });
});
