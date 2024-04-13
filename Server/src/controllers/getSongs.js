require('dotenv').config();
const { Op } = require('sequelize');
const { Songs } = require("../db");

const getSongs = async (req, res) => {
    try {
        const { name } = req.query;

        if (name) {

            const MusicName = await Songs.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    },
                },

            });

            if (MusicName.length === 0) {
                const mensaje = "No se encontró la canción";

                return res.status(200).json(mensaje);
            }

            return res.status(200).json(MusicName);

        } else {
            const allSongs = await Songs.findAll();
            if (allSongs.length === 0) {
                const mensaje = "No hay canciones aún";

                return res.status(200).json(mensaje);
            }

            return res.status(200).json(allSongs);
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las canciones' });
    }
};

module.exports = getSongs;
