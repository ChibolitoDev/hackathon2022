
const {response, request} = require("express");
const { getDepartamentosProvincia, getLima } = require("../models/Departamento");


 const model_getDepartamentoProvincia = async (req =request, res = response)=>{
    const {depa} = req.body;
    const respuesta = await getDepartamentosProvincia(depa)
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
 }


 const model_getLima = async(req =request, res= response) => {
    const respuesta = await getLima();
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}

module.exports ={
    model_getDepartamentoProvincia,
    model_getLima
}