const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('cars', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        mark: {
            type: DataTypes.STRING,
            default: null
        },

        model: {
            type: DataTypes.STRING,
            default: null
        },

        price: {
            type: DataTypes.FLOAT,
            default: null
        }

        }, {

        freezeTableName : true
            
    });

}