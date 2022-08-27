const {response, request} = require("express");
const {Router} = require('express');
const { getAforo, getSedes, getTSedesController, updateAforo } = require("../controllers/Sede");

const router = Router();

router.get('/Sede/getAforo', getAforo);
router.get('/Sede/getSedes', getSedes);
router.get('/Sede/getTSedes', getTSedesController);
router.post('/Sedes/CambiarAforo', updateAforo);



module.exports= router;