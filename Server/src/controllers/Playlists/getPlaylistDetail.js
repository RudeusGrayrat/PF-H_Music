const { PlaylistDetails } = require('../../db');

const getPlaylistDetail = async (req, res) => {

    const { id } = req.params;

    if (!id) { 
        return res.status(400).json({ error: 'El id de la playlist es necesario' });
    }
    const playlistDetail = await PlaylistDetails.findAll({
        where: {
            PlaylistID: id
        }
    });
     return res.status(200).json(playlistDetail);

}
module.exports = getPlaylistDetail;