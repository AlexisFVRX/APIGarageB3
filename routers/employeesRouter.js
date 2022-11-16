const express = require('express'),

      router = express.Router(),

      employeesController = require('../controller/employees.js');



router.get('/', employeesController.getEmployees);

router.get('/:id', employeesController.getEmployeeByMatricule);

router.post('/', employeesController.addEmployee);

router.delete('/:id', employeesController.deleteEmployeeByMatricule);



module.exports = router;