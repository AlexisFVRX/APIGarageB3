const customersService = require('../services/employees');
const createError = require('http-errors');

exports.getEmployees = async (req, res) => {
   const employees = await employeesService.getEmployees();
   //res.set('Cache-Control', 'max-age=30'); // Using client cache
   res.json({success: true, data: employees});
}

exports.getEmployeeByMatricule = async (req, res, next) => {
   let employeeMatricule = parseInt(req.params.matricule); // We are sure here by using validator that we have a valid number, we can parseInt
   const employees = await employeeService.getEmployeeById(employeeMatricule);
   if (employees && employees.length === 1) {
      res.json({success: true, data: employees[0]});
   } else {
      next(createError(404, "no employee found for this matricule"));
   }
}

exports.addEmployee = async (req, res, next) => {
   if (req.body && req.body.lastname && req.body.firstname && req.body.email) {
      const employeeCreated = await employeesService.addEmployee(req.body.lastname, req.body.firstname, req.body.email);
      if (employeeCreated) {
         res.status(201).json({success: true, matricule: employeeCreated.matricule});
      } else {
         next(createError(400, "Error when creating this employee, verify your args"));
      }
   } else {
      next(createError(400, "Cannot add this employee, make sure all args has been sent"));
   }
}

exports.deleteEmployeeByMatricule = async (req, res, next) => {
   if (req.params.matricule) {
      const matricule = parseInt(req.params.matricule);
      const employees = await employeesService.getEmployeeByMatricule(matricule);
      if (employees.length === 1) {
         const nbOfDeletion = await customersService.deleteEmployeeByMatricule(matricule);
         if (nbOfDeletion === 1) {
            res.json({success: true});
         } else {
            next(createError(500, 'Unknown error when trying to delete this employee, maybe it\'s already deleted'));
         }
      } else {
         next(createError(404, `The employee with matricule '${matricule}' doesn't exists, it cannot be deleted`));
      }
   } else {
      next(createError(400, "The employee matricule is required"));
   }
}