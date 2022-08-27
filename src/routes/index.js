const {response, request} = require("express");
const {Router} = require('express');
const { getAforo, getSedes, getTSedesController, cambiarAforo } = require("../controllers/Sede");
const { model_getDepartamentoById, model_getTDepartamentos } = require("../controllers/Departamento"); 
const { model_getProvinciaByDepa, model_getTProvincias }  = require("../controllers/Provincia");
const { model_getDistritoByProv , model_getTDistritos } = require("../controllers/Distrito");  

const router = Router();

router.get('/Sede/getAforo', getAforo);
router.get('/Sede/getSedes', getSedes);
router.get('/Sede/getTSedes', getTSedesController);
router.post('/Sedes/CambiarAforo', cambiarAforo);



module.exports= router;