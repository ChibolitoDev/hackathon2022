const {response, request} = require("express");
const { getProvinciaByDepa, getTProvincias } = require("../models/Provincia");


 const getProvinciaByDepa = async (req =request, res = response)=>{
    const {depa_id} = req.body;
    const respuesta = getProvinciaById(depa_id)
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
 }


 const getTProvincias = async(req =request, res= response) => {
    const respuesta = getTProvincias();
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}

module.exports ={
    getProvinciaByDepa,
    getTProvincias
}