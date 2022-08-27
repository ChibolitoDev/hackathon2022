import { getSedes, getSede, getTSedes } from './../models/Sede';
const {response, request} = require("express")


export const getAforo = async (req =request, res = response)=>{
    const {sede} = req.body;
    const respuesta = getSede(sede)
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}

export const getSedes = async( req =request, res= response)=>{
    const{distrito} = req.body;
    const respuesta =  getSedes(distrito);
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}

export const getTSedes = async( req =request, res= response) => {
    const respuesta = getTSedes();
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}