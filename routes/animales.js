var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Animal= require('../models/animal');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.status('index', {title: "animales zologico de chapultepec"});
});

router.get('/', function(req, res, next) {
  Animal.find({},function(err,datos){
    res.status(200).json(datos);
  });

});


router.get('/:userId', function(req, res, next) {
  Animal.findOne({
    'id': req.params.userId
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
    }

  });
  //res.json(req.params.userId);
});

/* nuevo animal*/
router.post('/', function(req, res, next) {
 // console.log(req.body);
  var animal=  Animal({
    id: req.body.id,
    nombre:req.body.nombre,
    tipo:req.body.tipo,
    habitad:req.body.habitad
  });
    //res.send(usuario);

  animal.save(function(err,data){
    if (err) {
      res.status(404).json({
        mensaje: "Error al guardar"
      });
    }else {
      res.status(201).json(data);
    }
  });

});


module.exports = router;
