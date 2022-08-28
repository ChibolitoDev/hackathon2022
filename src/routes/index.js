const { response, request } = require("express");
const { Router } = require('express');
const { getAforo, getSedes, getTSedes } = require("../controllers/Sede");
const { model_getDepartamentoProvincia, model_getLima } = require("../controllers/Departamento");
const { model_getProvinciaByDepa, model_getTProvincias } = require("../controllers/Provincia");
const { model_getDistritoByProv, model_getTDistritos } = require("../controllers/Distrito");
const { getAforoSalas, getSalas, getTSalas, updateAforoSala } = require("../controllers/Salas");


const router = Router();

//Salas
router.get('/Salas/getAforo', getAforoSalas);
router.get('/Salas/getSalas', getSalas);
router.get('/Salas/getTSalas', getTSalas);
router.post('/Salas/updateAforo', updateAforoSala);


//Sede
router.get('/Sede/getAforo', getAforo);
router.get('/Sede/getSedes', getSedes);
router.get('/Sede/getTSedes', getTSedes);

//Departamento
router.get('/Departamento/getLima', model_getLima);
router.get('/Departamento/getProvincias', model_getDepartamentoProvincia);

// Provincia 
router.get('/Provincia/getProvinciaByDepa', model_getProvinciaByDepa);
router.get('/Provicina/getTProvincias', model_getTProvincias);

// Distrito 
router.post('/Distrito/getDistritoByProv', model_getDistritoByProv);
router.get('/Distrito/getTDistritos', model_getTDistritos);




module.exports = router;