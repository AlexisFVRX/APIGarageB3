const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.hostname,
    port: 8889,
    dialect: "mysql"
});

module.exports = {
    instance,
    users: require('./cars')(instance)
};

module.exports = {
    instance,
    users: require('./customers')(instance)
};

module.exports = {
    instance,
    users: require('./employees')(instance)
};