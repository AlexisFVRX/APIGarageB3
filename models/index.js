const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.hostname,
    port: 8889,
    dialect: "mysql"
});

module.exports = {
    instance,
    cars: require('./cars')(instance),
    customers: require('./customers')(instance),
    employees: require('./employees')(instance)
};