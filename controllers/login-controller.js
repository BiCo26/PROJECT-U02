const User = require('../models/user');
const bcrypt = require('bcryptjs');

const usersController = {};

usersController.index = function(req, res){
 res.redirect('./');
};

usersController.create = function(req, res, next){
 const salt = bcrypt.genSaltSync();
 const hash = bcrypt.hashSync(req.body.password, salt);
 User.create({
   username: req.body.username,
   password_digest: hash,
   email: req.bmody.email,
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

usersController.show = (req, res) => {
  User.findById(req.params.id)
    .then(function(users){
      res.render('users/users-single',{
        message: 'ok',
        data: users,
      });
    }).catch(function(err){
      console.log(err);
      res.status(500).json({
        message: 'Not found!',
        error: err,
      });
    });
};

usersController.update = function(req, res){
  User.update({
    username: req.body.username,
    password_digest: req.body.password_digest,
    email: req.body.email,
    zip: req.body.zip
  }, req.params.id).then(function(users){
    res.json({
      message: 'Updated successfully!',
      data: users,
    });
  }).catch(function(err){
    console.log(err);
    res.status(500).json({
      message: 'Update failed',
      error: err,
    });
  });
};

usersController.delete = function(req, res){
  User.destroy(req.params.id)
    .then(function(){
      res.json({ message: 'Successfully deleted' });
    }).catch(function(err){
      console.log(err);
      res.status(500).json({
        message: 'Delete failed',
        error: err,
      });
    });
};



module.exports = usersController;

