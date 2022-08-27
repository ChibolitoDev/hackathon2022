const database = require('../models/db');

const db = database.pool;

export const getTsalas = async()=>{
    const table = await db.query(`
    select SEDE, AFORO, from SALA
    `).then( res => {
        return res.rows();
    }).catch( e=>{
        //enviar error por correo
        return false
    });
    return table;
    }

export const getSala = async(sede) =>{
        const table = await db.query(`
        select s.NOMBRE, s.AFORO
        from SALA s left join SEDE sd on s.ID_SEDE = sd.ID_SEDE
        where sd.NOMBRE = ${sede}
         `).then( res => {
            return res.rows();
         }).catch( e=>{
            //enviar error por correo
            return false
        });
        return table;
}

export const cambiarAforo = async(quantity, id) =>{
    const table = await db.query(`UPDATE SALA set AFORO = ${quantity} where ID_SALA = ${id}`).then( res => {
        return true
     }).catch( e=>{
        //enviar error por correo
        return false
    });
    return table;
}