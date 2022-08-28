const { response, request } = require("express");
const { getDistritoByProv, getTDistritos } = require("../models/Distrito");


const model_getDistritoByProv = async (req = request, res = response) => {
    const { prov_id } = req.body;
    console.log(prov_id);
    const respuesta = await getDistritoByProv(prov_id)
    if (respuesta == false) {
        res.status(400)
    }
    res.status(200).json(respuesta)
}


const model_getTDistritos = async (req = request, res = response) => {
    const respuesta = await getTDistritos();
    if (respuesta == false) {
        res.status(400)
    }
    res.status(200).json(respuesta)
}

module.exports = {
    model_getDistritoByProv,
    model_getTDistritos
}