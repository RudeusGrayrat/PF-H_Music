const { Playlists, Users, Likes } = require('../../db.js');

const getUserPlaylist = async (req, res) => {
    const { id } = req.body
    try {
        const userId = id // Suponiendo que tienes acceso al id del usuario logeado en req.userId

        const playlists = await Playlists.findAll({
            where: {
                UserID: userId
            },
            include: [
                {
                    model: Users,
                    attributes: ['name']
                },
                {
                    model: Likes,
                    required: true
                }
            ]
        });

        if (playlists.length === 0) {
            return res.status(404).json({ error: 'no hay playlist disponibles' });
        } else {
            return res.status(200).json(playlists);
        }

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = getUserPlaylist;