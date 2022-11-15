const { Sequelize } = require('sequelize');
const dbConfig = require('./db.config');

const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.hostname,
    port: 8889,
    dialect: "mysql"
});

module.exports = {
    instance,
    users: require('./users')(instance)
};

module.exports = {
    instance,
    users: require('./books')(instance)
};

module.exports = {
    instance,
    users: require('./reviews')(instance)
};