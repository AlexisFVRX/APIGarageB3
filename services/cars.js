const db = require('../models');

exports.getCars = () => {
    return db.cars.findAll();
}

exports.getCarById = (id) => {
    return db.cars.findAll({
        where: {
            id
        }
    });
}

exports.addCar = (mark, model, price) => {
    return db.cars.create({mark, model, price});
}

exports.updateCar = async (id, mark, model, price) => {
    return await db.cars.update({
        mark: mark,
        model: model,
        price: price,
    },
    {
        where: {id : id}
    });

}

exports.deleteCarById = (id) => {
    return db.cars.destroy({
        where: {
            id
        }
    });
}