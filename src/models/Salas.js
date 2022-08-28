const database = require('../models/db');

const db = database.pool;

const callAforo = async (sala) =>{
    const table = await db.query(`
    Select NOMBRE, AFORO, AFORO_TOTAL from SALA where ID_SALA = ${sede}
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
    select ID_SALA, NOMBRE, AFORO, AFORO_MAX from SALA
    `).then( res => {
        return res.rows;
    }).catch( e=>{
        console.log(e)
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
            return res.rows;
         }).catch( e=>{
            //enviar error por correo
            return false
        });
        return table;
}

const callUpdateAforoSala = async(quantity, id) =>{
    const table = await db.query(`UPDATE SALA set AFORO = ${quantity} where ID_SALA = ${id} RETURNING id_sede`).then( res => {
        const ids = res.rows[0].id_sede;
        callUpdateAforo(ids);
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;
}


const callUpdateAforo = async (id) => {
    
    const table = await db.query(`
    UPDATE sede set aforo =
    (SELECT SUM(AFORO) from Sala where ID_SEDE = ${id}) 
    where ID_SEDE = ${id};
    `).then(() => {
        return true;
    }).catch(e => {
        console.log(e);
        //enviar error por correo
        return false;
    });
    return table;
}


module.exports ={
    callAforo,
    callSala,
    callTSalas,
    callUpdateAforoSala
}
