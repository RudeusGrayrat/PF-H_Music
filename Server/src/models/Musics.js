const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('music', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artista: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // pathMusic: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },

    }, {
        timestamps: false
    });
};
