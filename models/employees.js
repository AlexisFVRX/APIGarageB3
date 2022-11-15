const { DataTypes } = require('sequelize');
const { database } = require('../db.config');

module.exports = (instance) => {
    return instance.define('employees', {
        matricule: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        lastname: {
            type: DataTypes.STRING,
            default: null
        },

        firstname: {
            type: DataTypes.STRING,
            default: null
        },

        email: {
            type: DataTypes.STRING,
            default: null
        }

        }, {

        freezeTableName : true
            
    });

}