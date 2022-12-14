const { response, request } = require("express");
const { Router } = require('express');
const { getAforo, getSedes, getTSedes } = require("../controllers/Sede");
const { model_getDepartamentoProvincia, model_getLima } = require("../controllers/Departamento");
const { model_getProvinciaByDepa, model_getTProvincias, model_getProvinciaSede } = require("../controllers/Provincia");
const { model_getDistritoByProv, model_getTDistritos } = require("../controllers/Distrito");
const { getAforoSalas, getSalas, getTSalas, updateAforoSala } = require("../controllers/Salas");


const router = Router();

//Salas
router.post('/Salas/getAforo', getAforoSalas);
router.post('/Salas/getSalas', getSalas);
router.get('/Salas/getTSalas', getTSalas);
router.post('/Salas/updateAforo', updateAforoSala);


//Sede
router.post('/Sede/getAforo', getAforo);
router.post('/Sede/getSedes', getSedes);
router.get('/Sede/getTSedes', getTSedes);

//Departamento
router.get('/Departamento/getLima', model_getLima);
router.get('/Departamento/getProvincias', model_getDepartamentoProvincia);

// Provincia 
router.post('/Provincia/getProvinciaByDepa', model_getProvinciaByDepa);
router.get('/Provicina/getTProvincias', model_getTProvincias);
router.get('/Provincia', model_getProvinciaSede);

// Distrito 
router.post('/Distrito/getDistritoByProv', model_getDistritoByProv);
router.get('/Distrito/getTDistritos', model_getTDistritos);




module.exports = router;