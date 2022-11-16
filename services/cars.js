const db = require('../models');

exports.getCars = () => {
    return db.cars.findAll();
}

exports.getCarsById = (id) => {
    return db.cars.findAll({
        where: {
            id
        }
    });
}

exports.addCar = (mark, model, price) => {
    return db.cars.create({mark, model, price});
}

exports.deleteCarById = (id) => {
    return db.cars.destroy({
        where: {
            id
        }
    });
}