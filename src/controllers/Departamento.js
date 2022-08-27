
const {response, request} = require("express");
const { getDepartamentoById, getTDepartamentos } = require("../models/Departamento");


 const model_getDepartamentoById = async (req =request, res = response)=>{
    const {depa} = req.body;
    const respuesta = getDepartamentoById(depa)
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
 }


 const model_getTDepartamentos = async(req =request, res= response) => {
    const respuesta = getTDepartamentos();
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}

module.exports ={
    model_getDepartamentoById,
    model_getTDepartamentos
}