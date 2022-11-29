const customersService = require('../services/customers');
const createError = require('http-errors');

exports.getCustomers = async (req, res) => {
   const customers = await customersService.getCustomers();
   //res.set('Cache-Control', 'max-age=30'); // Using client cache
   res.json({success: true, data: customers});
}

exports.getCustomerById = async (req, res, next) => {
   let customerId = parseInt(req.params.id); // We are sure here by using validator that we have a valid number, we can parseInt
   const customers = await customersService.getCustomerById(customerId);
   if (customers && customers.length === 1) {
      res.json({success: true, data: customers[0]});
   } else {
      next(createError(404, "no customer found for this id"));
   }
}

exports.addCustomer = async (req, res, next) => {
   if (req.body && req.body.lastname && req.body.firstname && req.body.email) {
      const customerCreated = await customersService.addCustomer(req.body.lastname, req.body.firstname, req.body.email);
      if (customerCreated) {
         res.status(201).json({success: true, id: customerCreated.id});
      } else {
         next(createError(400, "Error when creating this customer, verify your args"));
      }
   } else {
      next(createError(400, "Cannot add this customer, make sure all args has been sent"));
   }
}

exports.updateCustomer= function updateCustomer(firstname, lastname, email) {
   if (firstname != null && lastname != null && email != null) {
       const customer = this.getCustomerById(id);
       customer.firstname = firstname;
       customer.lastname = lastname;
       customer.email = email;
       return car;
   } else {
       throw new Error('All parameters are required');
   }
}

exports.deleteCustomerById = async (req, res, next) => {
   if (req.params.id) {
      const id = parseInt(req.params.id);
      const customers = await customersService.getCustomerById(id);
      if (customers.length === 1) {
         const nbOfDeletion = await customersService.deleteCustomerById(id);
         if (nbOfDeletion === 1) {
            res.json({success: true});
         } else {
            next(createError(500, 'Unknown error when trying to delete this customer, maybe it\'s already deleted'));
         }
      } else {
         next(createError(404, `The customer with id '${id}' doesn't exists, it cannot be deleted`));
      }
   } else {
      next(createError(400, "The customerId is required"));
   }
}