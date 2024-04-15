const { Router } = require('express');

const getSongs = require("../controllers/Songs/getSongs");
const getSongById = require("../controllers/Songs/getSongById");
const postUsers = require('../controllers/Users/postUsers');
const postSongs = require("../controllers/Songs/postSongs");
const postGenres = require('../controllers/Genres/postGenres');
const postArtists = require('../controllers/Artists/postArtists');
const getUsers = require('../controllers/Users/getUsers');
const login = require('../controllers/Users/login');

const router = Router();

router.get("/songs", getSongs);
router.get("/songs/:idSong", getSongById);
router.get("/users", getUsers);
router.get("/login", login);
router.post("/users", postUsers);
router.post("/songs", postSongs);
router.post("/genres", postGenres);
router.post("/artists", postArtists);

module.exports = router;
