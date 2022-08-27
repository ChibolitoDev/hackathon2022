const database = require('../models/db');

const db = database.pool;

export const getSalas = async(sede) =>{
    try{
        const table = await db.query(`select nombre, aforo from Salas where sede_id = ${sede}`);
        return table.rows();
    }
    catch{
        return false;
    }
}

export const cambiarAforo = async(quantity, id) =>{

    try {
        const table = await db.query(`UPDATE Sede set aforo = ${quantity} where id = ${id}`);
        return true;    
    } catch (error) {
        return false;
        //enviar error
    }  

}