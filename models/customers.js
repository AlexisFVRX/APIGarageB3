module.exports = (instance) => {
    return instance.define('customers', {
        id: {
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
            type: DataTypes.FLOAT,
            default: null
        }

        }, {

        freezeTableName : true
            
    });

}