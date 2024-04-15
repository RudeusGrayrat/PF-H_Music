const { Temperaments } = require('../../db');

const getClients = async (req, res) => {
    try {

        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los tipos de Pokémon' });
    }
};

module.exports = getClients;
