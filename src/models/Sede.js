const database = require('../models/db');

const db = database.pool;


export const getTSedes = async()=>{
    const table = await  db.query(`
    select NOMBRE, DIRECCION from SEDE
    `).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;
}

export const getSede = async(sede) =>{
    const table = await db.query(`
    Select AFORO from SEDE where nombre = ${sede}
    `).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;
}

export const getSedes = async(distrito) =>{
    
    const table = await db.query(`
    Select NOMBRE, DIRECCION
    from SEDE s left join DISTRITO d on s.ID_DISTRITO = d.id 
    where d.NOMBRE= '${distrito}'`).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;
       
}

export const cambiarAforo = async(quantity, id) =>{
    const table = await db.query(`UPDATE SEDE set AFORO = ${quantity} where ID_SEDE = ${id}`).then( res => {
        return true;
        }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;

}