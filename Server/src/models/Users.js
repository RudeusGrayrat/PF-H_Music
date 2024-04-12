const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allownNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allownNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allownNull: false,
        }
    },
        {
            timestamps: false
        }
    )
};
