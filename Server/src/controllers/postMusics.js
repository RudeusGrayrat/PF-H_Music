const { Music } = require('../db');

const postMusics = async (req, res) => {
    try {
        const {
            imagen,
            nombre,
            artista,
        } = req.body;

        const existingMusic = await Music.findOne({
            where: {
                nombre: nombre,
                artista: artista
            }
        });

        // Si ya existe, enviar un mensaje de error
        if (existingMusic) {
            return res.status(400).json({
                error: 'Ya existe una canción con ese nombre del mismo artista.'
            });
        }

        // Crear la nueva canción
        const newMusic = await Music.create({
            imagen,
            nombre,
            artista,
        });

        return res.status(200).json(newMusic);
    } catch (error) {
        // Manejar errores de validación de Sequelize
        console.error(error);
        res.status(500).json({ error: 'Error al crear una nueva canción' });

    }
};

module.exports = postMusics;
