const express = require('express'),

      router = express.Router(),

      customersController = require('../controller/customers.js');



router.get('/', customersController.getCustomers);

router.get('/:id', customersController.getCustomerById);

router.post('/', customersController.addCustomer);

router.patch('/:id', customersController.updateCustomer);

router.delete('/:id', customersController.deleteCustomerById);



module.exports = router;