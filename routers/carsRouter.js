const express = require('express'),

      router = express.Router(),

      carsController = require('../controller/cars.js');



router.get('/', carsController.getCars);

router.get('/:id', carsController.getCarById);

router.post('/', carsController.addCar);

router.delete('/:id', carsController.deleteCarById);



module.exports = router;