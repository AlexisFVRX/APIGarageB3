const carsService = require('../services/cars');
const createError = require('http-errors');

exports.getCars = async (req, res) => {
   const cars = await carsService.getCars();
   res.set('Cache-Control', 'max-age=30'); // Using client cache
   res.json({success: true, data: cars});
}

exports.getCarById = async (req, res, next) => {
   let carId = parseInt(req.params.id); // We are sure here by using validator that we have a valid number, we can parseInt
   const cars = await carsService.getCarById(carId);
   if (cars && cars.length === 1) {
      res.json({success: true, data: cars[0]});
   } else {
      next(createError(404, "no car found for this id"));
   }
}

exports.addCar = async (req, res, next) => {
   if (req.body && req.body.title && req.body.date) {
      const carCreated = await carsService.addCar(req.body.title, req.body.date);
      if (carCreated) {
         res.status(201).json({success: true, id: carCreated.id});
      } else {
         next(createError(400, "Error when creating this car, verify your args"));
      }
   } else {
      next(createError(400, "Cannot add this car, make sure all args has been sent"));
   }
}

exports.deleteCarById = async (req, res, next) => {
   if (req.params.id) {
      const id = parseInt(req.params.id);
      const cars = await booksService.getCarById(id);
      if (cars.length === 1) {
         const nbOfDeletion = await carsService.deleteCarById(id);
         if (nbOfDeletion === 1) {
            res.json({success: true});
         } else {
            next(createError(500, 'Unknown error when trying to delete this car, maybe it\'s already deleted'));
         }
      } else {
         next(createError(404, `The car with id '${id}' doesn't exists, it cannot be deleted`));
      }
   } else {
      next(createError(400, "The carId is required"));
   }
}