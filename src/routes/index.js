const {response, request} = require("express");
const {Router} = require('express');
const { getAforo, getSedes, getTSedesController, cambiarAforo } = require("../controllers/Sede");

const router = Router();

router.get('/Sede/getAforo', getAforo);
router.get('/Sede/getSedes', getSedes);
router.get('/Sede/getTSedes', getTSedesController);
router.post('/Sedes/CambiarAforo', cambiarAforo);



module.exports= router;