import e from 'express';

const database = require('../models/db');

const db = database.pool;

export const getSalas = async(sede) =>{
        const table = await db.query(`
        select s.nombre, s.aforo
        from Salas s left join Sede sd on s.sede_id = sd.id
        where sd.nombre = ${sede}
         `).then( res => {
            return res.rows();
         }).catch( e=>{
            //enviar error por correo
            return false
        });
        return table;
}

export const cambiarAforo = async(quantity, id) =>{
    const table = await db.query(`UPDATE Sede set aforo = ${quantity} where id = ${id}`).then( res => {
        return true
     }).catch( e=>{
        //enviar error por correo
        return false
    });
    return table;
    

}