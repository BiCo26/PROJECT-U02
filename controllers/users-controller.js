const User = require('../models/user');

const userController = {};

userController.index = function(req, res){
  User.findAll()
    .then(function(users){
      res.send('test2');
      // res.render('users/test',{
      //   message: 'ok',
      // });
    }).catch(function(err){
      console.log(err);
      res.status(500).json({
        message: 'Not found!',
        error: err,
      });
    });
};

module.exports = userController;
