const express = require('express');
const registerRoutes = express.Router();

const registerController = require('../controllers/register-controller');

registerRoutes.get('/', registerController.index);
// registerRoutes.post('/', registerController.create);

registerRoutes.get('/register', function(req,res){
  res.render('./views/register');
});

// registerRoutes.get('/register', registerController.show);
// registerRoutes.put('/register', registerController.update);
// registerRoutes.delete('/register', registerController.delete);

// const adminRoutes = require('./admin-route');
// registerRoutes.use('/admin', adminRoutes);

module.exports = registerRoutes;
