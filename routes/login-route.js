const express = require('express');
const loginRoutes = express.Router();

const loginController = require('../controllers/login-controller');

loginRoutes.get('/', loginController.index);
loginRoutes.post('/', loginController.create);

loginRoutes.get('/login', function(req,res){
  res.render('views/login');
});

loginRoutes.get('/login', loginController.show);
loginRoutes.put('/login', loginController.update);
loginRoutes.delete('/login', loginController.delete);

module.exports = loginRoutes;
