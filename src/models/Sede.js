const database = require('../models/db');

const db = database.pool;

export const getSedes = async(distrito) =>{
    
    const table = await db.query(`
    Select nombre, direccion, aforo 
    from sedes s left join distrito d on s.distrito_id = d.id 
    where d.distrito = '${distrito}'`).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;
    
    
}

export const cambiarAforo = async(quantity, id) =>{
    const table = await db.query(`UPDATE Sede set aforo = ${quantity} where id = ${id}`).then( res => {
        return true;
        }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;

}