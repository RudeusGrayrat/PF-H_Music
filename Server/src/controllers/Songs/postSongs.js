const { Songs } = require('../../db');

const postSongs = async (req, res) => {
    try {
        const { name, image, pathMusic, ArtistID, GenreID } = req.body;

        const existingSongs = await Songs.findOne({
            where: {
                name: name,
                ArtistID: ArtistID
            }
        });

        // Si ya existe, enviar un mensaje de error
        if (existingSongs) {
            return res.status(400).json({
                error: 'Ya existe una canción con ese nombre y artista.'
            });
        }

        // Crear la nueva canción
        const newSongs = await Songs.create({
            image,
            name,
            pathMusic,
            ArtistID,
            GenreID
        });

        return res.status(200).json(newSongs);
    } catch (error) {
        // Manejar errores de validación de Sequelize
        console.error(error);
        res.status(500).json({ error: 'Error al crear una nueva canción' });

    }
};

module.exports = postSongs;
