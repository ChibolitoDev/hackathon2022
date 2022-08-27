
const {response, request} = require("express");
const { getSede, getTSedes, getSedes, cambiarAforo } = require("../models/Sede");


//  const getAforo  = async (req =request, res = response)=>{
//     const {sede} = req.body;
//     const respuesta = getSede(sede)
//     if(respuesta == false){
//         res.status(400)
//     }
//     res.status(200).json(respuesta)
// }

//  const getSedes = async( req =request, res= response)=>{
//     const{distrito} = req.body;
//     const respuesta =  getSedes(distrito);
//     if(respuesta == false){
//         res.status(400)
//     }
//     res.status(200).json(respuesta)
// }

 const getTSedesController = async( req =request, res= response) => {
    const respuesta = getTSedes();
    if(respuesta == false){
        res.status(400)
    }
    res.status(200).json(respuesta)
}

// const cambiarAforo = async(req = request, res= response)=>{
//     const {quantity, id} = req.body;
//     const respuesta  = cambiarAforo(quantity,id);
//     if(respuesta == false){
//         res.status(400)
//     }
//     res.status(200)
// }

module.exports ={
    //getAforo
    // getSedes,
    getTSedesController,
    // cambiarAforo
}