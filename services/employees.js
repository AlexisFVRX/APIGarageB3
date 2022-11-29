const db = require('../models');

exports.getEmployees = () => {
    return db.employees.findAll();
}

exports.getEmployeeByMatricule = (matricule) => {
    return db.employees.findAll({
        where: {
            matricule
        }
    });
}

exports.addEmployee = (lastname, firstname, email) => {
    return db.employees.create({lastname, firstname, email});
}

exports.updateEmployee = async (matricule, firstname, lastname, email) => {
    return await db.employees.update({
        firstname: firstname,
        lastname: lastname,
        email: email,
    },
    {
        where: {matricule : matricule}
    });
}

exports.deleteEmployeeByMatricule = (matricule) => {
    return db.employees.destroy({
        where: {
            matricule
        }
    });
}