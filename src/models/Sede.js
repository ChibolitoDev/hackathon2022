const database = require('../models/db');

const db = database.pool;

export const getSedes = async(distrito) =>{
    try{
        const table = await db.query(`Select nombre, direccion, aforo from sedes where distrito = '${distrito}'`);
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