const { Router } = require('express');

const getSongs = require("../controllers/Songs/getSongs");
const getSongById = require("../controllers/Songs/getSongById");
// const getClients = require("../controllers/getClients");
const postSongs = require("../controllers/Songs/postSongs");
const postGenres = require('../controllers/Genres/postGenres');
const postArtists = require('../controllers/Artists/postArtists');

const router = Router();

// Ejemplo: router.use('/auth', authRouter);
router.get("/songs", getSongs);
router.get("/songs/:idSong", getSongById);
// router.get("/clients", getClients);
router.post("/songs", postSongs);
router.post("/genres", postGenres);
router.post("/artists", postArtists);

module.exports = router;
