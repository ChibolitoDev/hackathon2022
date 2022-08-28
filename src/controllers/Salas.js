const {response, request} = require("express");
const {callTSalas, callSala, callUpdateAforoSala, callAforo } = require("../models/Salas");


const getAforoSalas = async (req = request, res = response) => {
    const { sede } = req.body;
    const respuesta = await callAforo(sede)
    if (respuesta == false) {
        res.status(400);
    }
    res.status(200).json(respuesta);
}

 const getSalas = async( req =request, res= response)=>{
    const{sede} =  req.body;
    const respuesta = await callSala(sede);
    if(respuesta == false){
        res.status(400);
    }
    res.status(200).json(respuesta);
}

 const getTSalas = async( req =request, res= response) => {
    const respuesta = await callTSalas();
    if(respuesta == false){
        res.status(400);
    }
    res.status(200).json(respuesta);
}

const updateAforoSala = async(req = request, res= response)=>{
    const {quantity, id} = req.body;
    const respuesta  = await callUpdateAforoSala(quantity,id);
    if(respuesta == false){
        res.status(400);
    }
    res.status(200);
}

module.exports ={
    getAforoSalas,
    getTSalas,
    getSalas,
    updateAforoSala
}