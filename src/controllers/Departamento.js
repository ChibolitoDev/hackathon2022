
const {response, request} = require("express");
const { getDepartamentoById, getTDepartamentos } = require("../models/Departamento");


 const getDepartamentoById = async (req =request, res = response)=>{
    const {depa} = req.body;
    const respuesta = getDepartamentoById(depa)
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
 }


 const getTDepartamentos = async(req =request, res= response) => {
    const respuesta = getTDepartamentos();
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}

module.exports ={
    getDepartamentoById,
    getTDepartamentos
}