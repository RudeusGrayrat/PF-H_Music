const { Router } = require('express');

const getSongs = require("../controllers/Songs/getSongs");
const getSongById = require("../controllers/Songs/getSongById");
const postUsers = require('../controllers/Users/postUsers');
const postSongs = require("../controllers/Songs/postSongs");
const postGenres = require('../controllers/Genres/postGenres');
const postArtists = require('../controllers/Artists/postArtists');
const getUsers = require('../controllers/Users/getUsers');
const login = require('../controllers/Users/login');
const postPlaylist = require('../controllers/Playlists/postPlaylist');
const postSongToPlaylist = require('../controllers/Playlists/postSongToPlaylist');
const getPlaylist = require('../controllers/Playlists/getPlaylist');
const getPlaylistDetail = require('../controllers/Playlists/getPlaylistDetail');
const postSavingPlaylist = require('../controllers/Likes/postSavingPlaylist');
const getUserPlaylist = require('../controllers/Playlists/getUserPlaylist');
const getUserById = require('../controllers/Users/getUserById');
const putUser = require('../controllers/Users/putUser');

const router = Router();

router.get("/songs", getSongs);
router.get("/songs/:idSong", getSongById);
router.get("/login", login);
router.get("/users", getUsers);
router.get("/users/:userId", getUserById);
router.get("/getUserPlaylist", getUserPlaylist);
router.get("getPlaylist", getPlaylist);
router.get("getPlaylistDetail", getPlaylistDetail);

router.put("/users", putUser);

router.post("/users", postUsers);
router.post("/songs", postSongs);
router.post("/genres", postGenres);
router.post("/artists", postArtists);
router.post("/playlist", postPlaylist);
router.post("/postPlaylist", postSongToPlaylist);
router.post("/postSavingPlaylist", postSavingPlaylist);

module.exports = router;
