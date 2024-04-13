const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getSongs = require("../controllers/getSongs");
// const getMusicById = require("../controllers/getMusicById");
// const getClients = require("../controllers/getClients");
const postSongs = require("../controllers/postSongs");
const postGenres = require('../controllers/postGenres');
const postArtists = require('../controllers/postArtists');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/songs", getSongs);
// router.get("/musics/:idRaza", getMusicById);
// router.get("/clients", getClients);
router.post("/songs", postSongs);
router.post("/genres", postGenres);
router.post("/artists", postArtists);

module.exports = router;
