const moon = require('../models/moon_rocks');
const main = require('lune');
// const current_phase = main.phase();
// alert(current_phase);

const moonControllers = {};

moonControllers.index = function(req,res){
  moon.findAll().then(function(moon){
    // res.send('moon control');
    res.render('moon/moon-start',main);
  })
};

moonControllers.create = function(req,res){
  moon.create({
    title: req.body.title,
    description: req.body.description
  }).then(function(moon){
    res.send(moon)
  })
};

// moonControllers.show = (req,res)=>{
//   moon.findById(req.params.id).then( moon =>{
//     res.render('moon/moon-single',{
//       data: moon
//     })
//   })
// };

// moonControllers.update = (req,res)=>{
//   console.log(req.body)
//   moon.update({
//     title: req.body.title,
//     description: req.body.description,
//     id: req.body.id
//   }).then( moon =>{
//     res.render('moon/moon-single',{
//       data: moon
//     })
//   })
// };

module.exports = moonControllers;
