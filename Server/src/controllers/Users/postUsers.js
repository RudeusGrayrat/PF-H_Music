const { Songs } = require('../../db');

const postUsers = async (req, res) => {
    try {
        
    } catch (error) {
        // Manejar errores de validación de Sequelize
        console.error(error);
        res.status(500).json({ error: 'Error al crear una nueva canción' });

    }
};

module.exports = postUsers;
