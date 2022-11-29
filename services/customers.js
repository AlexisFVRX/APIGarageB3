const db = require('../models');

exports.getCustomers = () => {
    return db.customers.findAll();
}

exports.getCustomerById = (id) => {
    return db.customers.findAll({
        where: {
            id
        }
    });
}

exports.addCustomer = (lastname, firstname, email) => {
    return db.customers.create({lastname, firstname, email});
}


exports.deleteCustomerById = (id) => {
    return db.customers.destroy({
        where: {
            id
        }
    });
}