const {response, request} = require("express");
const {Router} = require('express');
const { getAforo, getSedes, getTSedes, updateAforo } = require("../controllers/Sede");
const { model_getDepartamentoById, model_getTDepartamentos } = require("../controllers/Departamento"); 
const { model_getProvinciaByDepa, model_getTProvincias }  = require("../controllers/Provincia");
const { model_getDistritoByProv , model_getTDistritos } = require("../controllers/Distrito");  

const router = Router();

//Salas
// router.get('/Sede/getAforo', getAforo);
// router.get('/Sede/getSedes', getSedes);
// router.get('/Sede/getTSedes', getTSedes);
// router.post('/Sedes/updateAforo', updateAforo);


//Sede
router.get('/Sede/getAforo', getAforo);
router.get('/Sede/getSedes', getSedes);
router.get('/Sede/getTSedes', getTSedes);
router.post('/Sedes/updateAforo', updateAforo);

router.get('/Departamento/getTDepartamentos', model_getTDepartamentos);

// Provincia 
router.get('Provincia/getProvinciaByDepa/:depa_id', model_getProvinciaByDepa); 
router.get('Provicina/getTProvincias', model_getTProvincias); 

// Distrito 
router.get('Distrito/getDistritoByProv/:prov_id', model_getDistritoByProv); 
router.get('Distrito/getTDistritos', model_getTDistritos); 




module.exports= router;