const { Genres } = require('../../db');

const postGenres = async (req, res) => {
    try {
        const { name } = req.body;

        // Crear la nueva canción
        const newGenres = await Genres.create({
            name,
        });

        return res.status(200).json(newGenres);
    } catch (error) {
        // Manejar errores de validación de Sequelize
        console.error(error);
        res.status(500).json({ error: 'Error al crear una nueva canción' });

    }
};

module.exports = postGenres;
