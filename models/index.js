const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

module.exports = {
    instance,
    cars: require('./cars')(instance),
    customers: require('./customers')(instance),
    employees: require('./employees')(instance)
};