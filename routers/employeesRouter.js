const express = require('express'),

      router = express.Router(),

      employeesController = require('../controller/employees.js');



router.get('/', employeesController.getEmployees);

router.get('/:matricule', employeesController.getEmployeeByMatricule);

router.post('/', employeesController.addEmployee);

router.delete('/:matricule', employeesController.deleteEmployeeByMatricule);



module.exports = router;