const database = require('../models/db');

const db = database.pool;

const callAforo = async (sala) =>{
    const table = await db.query(`
    Select AFORO from SALA where ID_SALA = ${sede}
    `).then(res => {
        return res.rows;
    }).catch(e => {
        //enviar error por correo
        return false;
    });
    return table;
}

const callTSalas = async()=>{
    const table = await db.query(`
    select ID_SALA, SEDE, AFORO, from SALA
    `).then( res => {
        return res.rows();
    }).catch( e=>{
        //enviar error por correo
        return false
    });
    return table;
    }

const callSala = async(sede) =>{
        const table = await db.query(`
        select ID_SALA, AFORO
        from SALA
        where ID_SEDE = ${sede}
         `).then( res => {
            return res.rows();
         }).catch( e=>{
            //enviar error por correo
            return false
        });
        return table;
}

const callUpdateAforoSala = async(quantity, id) =>{
    const table = await db.query(`UPDATE SALA set AFORO = ${quantity} where ID_SALA = ${id}`).then( res => {
        return true
     }).catch( e=>{
        //enviar error por correo
        return false
    });
    return table;
}

module.exports ={
    callAforo,
    callSala,
    callTSalas,
    callUpdateAforoSala
}
