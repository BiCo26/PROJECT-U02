const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersController = {};

usersController.index = function(req, res){
 res.redirect('./welcome');
};

usersController.create = function(req, res, next){
 const salt = bcrypt.genSaltSync();
 const hash = bcrypt.hashSync(req.body.password, salt);
 User.create({
   username: req.body.username,
   password_digest: hash,
   email: req.body.email,
 }).then(function(user){
   req.login(user, function(err){
     if (err) return next(err);
     res.redirect('./welcome');
   });
 }).catch(function(err){
   console.log(err);
   res.status(500).json({ err });
 });
};

module.exports = usersController;
