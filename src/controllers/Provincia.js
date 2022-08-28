const {response, request} = require("express");
const { getProvinciaByDepa, getTProvincias, getProvinciaSede } = require("../models/Provincia");


 const model_getProvinciaByDepa = async (req =request, res = response)=>{
    const {depa_id} = req.body;
    const respuesta = await getProvinciaByDepa(depa_id)
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
 }


 const model_getTProvincias = async(req =request, res= response) => {
    const respuesta = await getTProvincias();
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}

const model_getProvinciaSede = async (req =request, res= response) =>{
    const respuesta = await getProvinciaSede();
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}

module.exports ={
    model_getProvinciaByDepa,
    model_getTProvincias,
    model_getProvinciaSede
}