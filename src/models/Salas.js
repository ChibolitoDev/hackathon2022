const database = require('../models/db');

const db = database.pool;

const callAforo = async (sala) =>{
    const table = await db.query(`
    Select NOMBRE, AFORO, AFORO_MAX, NROTRABAJADORES from SALA where ID_SALA = ${sala}
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
    select ID_SALA, NOMBRE, AFORO, AFORO_MAX, NROTRABAJADORES from SALA
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
        select NOMBRE, AFORO, AFORO_MAX, NROTRABAJADORES
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
    const table = await db.query(`
    UPDATE sede set aforo = ${quantity} 
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


const callUpdateAforo = async (id) => {
    
    const table = await db.query(`
    UPDATE sede set aforo = ${quantity} 
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
