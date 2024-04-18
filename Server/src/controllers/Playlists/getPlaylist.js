const { Playlists, Users } = require('../../db');

const getPlaylist = async(req,res) => {
    
    try {
        const gettingPlaylist = await Playlists.findAll({
            include: [
                {
                    model: Users,
                    attributes: ['name']
                }
            ]
        })
        if(gettingPlaylist.length === 0){
            return res.status(404).json({error:'no hay playlist disponibles'})
        } else{
            return res.status(200).json(gettingPlaylist);
        }

    } catch (error) {
        
        return res.status(400).json({error:error.message});
    }
}

module.exports = getPlaylist;