const express = require('express'),
      router = express.Router(),
      carsController = require('../controller/cars.js');

router.get('/cars', carsController.getCars);
router.get('/:id', carsController.getCarById);
router.post('/addCar', carsController.addCar);
router.delete('/:id', carsController.deleteCarById);

module.exports = router;