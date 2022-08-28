
const { response, request } = require("express");
const { callAforo, callSedeconDistrito, callTSedes, callUpdateAforo } = require("../models/Sede");


const getAforo = async (req = request, res = response) => {
    const { sede } = req.body;
    const respuesta = await callAforo(sede)
    if (respuesta == false) {
        res.status(400);
    }
    res.status(200).json(respuesta);
}

const getSedes = async (req = request, res = response) => {
    const { distrito } = req.body;
    const respuesta = callSedeconDistrito(distrito);
    if (respuesta == false) {
        res.status(400);
    }
    res.status(200).json(respuesta);
}

const getTSedes = async (req = request, res = response) => {
    const respuesta = await callTSedes();
    if (respuesta == false) {
        res.status(400);
    }
    res.status(200).json(respuesta);
}

const updateAforo = async (req = request, res = response) => {
    const { quantity, id } = req.body;
    const respuesta = await callUpdateAforo(quantity, id);
    // .then(data => {
    //     console.log(data);
    // });

    // res.status(200).json({ "data": "data" })
    if(respuesta == false){
        res.status(400);
    }
    res.status(200).json({"data":"data"});
}

module.exports = {
    getAforo,
    getSedes,
    getTSedes,
    updateAforo
}