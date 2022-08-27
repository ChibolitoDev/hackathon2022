const {response, request} = require("express");
const {callTSalas, callSala, callUpdateAforoSala } = require("../models/Salas");



 const getSalas = async( req =request, res= response)=>{
    const{distrito} = req.body;
    const respuesta =  callSala(distrito);
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}

 const getTSalas = async( req =request, res= response) => {
    const respuesta = callTSalas();
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}

const updateAforo = async(req = request, res= response)=>{
    const {quantity, id} = req.body;
    const respuesta  = callUpdateAforoSala(quantity,id);
    if(respuesta == false){
        res.status(400)
    }
    res.status(200)
}

module.exports ={
    getTSalas,
    getSalas,
    updateAforo
}