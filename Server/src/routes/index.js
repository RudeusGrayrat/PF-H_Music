const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getMusic = require("../controllers/getMusic");
const getMusicById = require("../controllers/getMusicById");
const getClients = require("../controllers/getClients");
const postMusics = require("../controllers/postMusics");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/musics", getMusic);
router.get("/musics/:idRaza", getMusicById);
router.get("/clients", getClients);
router.post("/musics", postMusics);

module.exports = router;
