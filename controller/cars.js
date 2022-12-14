const carsService = require('../services/cars');
const createError = require('http-errors');

exports.getCars = async (req, res) => {
   const cars = await carsService.getCars();
   //res.set('Cache-Control', 'max-age=30'); // Using client cache
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
   if (req.body && req.body.mark && req.body.model && req.body.price) {
      const carCreated = await carsService.addCar(req.body.mark, req.body.model, req.body.price);
      if (carCreated) {
         res.status(201).json({success: true, id: carCreated.id});
      } else {
         next(createError(400, "Error when creating this car, verify your args"));
      }
   } else {
      next(createError(400, "Cannot add this car, make sure all args has been sent"));
   }
}

exports.updateCar = async (req, res, next) => {
   if (req.params.id && req.body.mark != null && req.body.model != null && req.body.price != null) {
       const car = await carsService.getCarById(req.params.id);
       let mark, model, price;
       car.map(async(c)=>{
         req.body.mark ? mark = req.body.mark : mark = c.dataValues.mark;
         req.body.model ? model = req.body.model : model = c.dataValues.model;
         req.body.price ? price = req.body.price : price = c.dataValues.price;
       })
       carsService.updateCar(req.params.id, mark, model, price);
       res.json({success : true});
   } else {
       throw new Error('All parameters are required');
   }
}


exports.deleteCarById = async (req, res, next) => {
   if (req.params.id) {
      const id = parseInt(req.params.id);
      const cars = await carsService.getCarById(id);
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