const express = require('express');
const moonRoutes = express.Router();

const moonController = require('../controllers/moon-controller');

moonRoutes.get('/', moonController.index);
moonRoutes.post('/', moonController.create);

moonRoutes.get('/moon', function(req,res){
  res.render('./views/moon');
});

// registerRoutes.get('/register', registerController.show);
// registerRoutes.put('/register', registerController.update);
// registerRoutes.delete('/register', registerController.delete);

// const adminRoutes = require('./admin-route');
// registerRoutes.use('/admin', adminRoutes);

module.exports = registerRoutes;
