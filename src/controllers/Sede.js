
const { response, request } = require("express");
const { callAforo, callSedeconDistrito, callTSedes, callUpdateAforo } = require("../models/Sede");


const getAforo = async (req = request, res = response) => {
    const { sede } = req.body;
    const respuesta = callAforo(sede)
    if (respuesta == false) {
        res.status(400)
    }
    res.status(200).json(respuesta)
}

const getSedes = async (req = request, res = response) => {
    const { distrito } = req.body;
    const respuesta = callSedeconDistrito(distrito);
    if (respuesta == false) {
        res.status(400)
    }
    res.status(200).json(respuesta)
}

const getTSedesController = async (req = request, res = response) => {
    const respuesta = callTSedes();
    if (respuesta == false) {
        res.status(400)
    }
    res.status(200).json(respuesta)
}

const updateAforo = async (req = request, res = response) => {
    const { quantity, id } = req.body;
    const respuesta = callUpdateAforo(quantity, id).then(data => {
        console.log(data);
    });

    res.status(200).json({ "data": "data" })

}

module.exports = {
    getAforo,
    getSedes,
    getTSedesController,
    updateAforo
}