require('dotenv').config();
const { Op } = require('sequelize');
const { Music } = require("../db");

const getMusic = async (req, res) => {
    try {
        const { name } = req.query;

        if (name) {

            const MusicName = await Music.findAll({
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
            const allMusic = await Music.findAll();
            if (allMusic.length === 0) {
                const mensaje = "No hay canciones aún";

                return res.status(200).json(mensaje);
            }

            return res.status(200).json(allMusic);
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las canciones' });
    }
};

module.exports = getMusic;
