const database = require('../models/db');

const db = database.pool;



const callTSedes = async () => {
    const table = await db.query(`
    select ID_SEDE, NOMBRE, DIRECCION from SEDE
    `).then(res => {
        return res.rows;
    }).catch(e => {
        //enviar error por correo
        return false;
    });
    return table;
}

const callAforo = async (sede) => {
    const table = await db.query(`
    Select AFORO, AFORO_TOTAL, DIRECCION from SEDE where ID_SEDE = ${sede}
    `).then(res => {
        return res.rows;
    }).catch(e => {
        //enviar error por correo
        return false;
    });
    return table;
}

const callSedeconDistrito = async (distrito) => {

    const table = await db.query(`
    Select ID_SEDE,NOMBRE, DIRECCION
    from SEDE
    WHERE ID_DISTRITO = ${distrito}
    `).then(res => {
        return res.rows;
    }).catch(e => {
        //enviar error por correo
        return false;
    });
    return table;

}

const callUpdateAforo = async (quantity, id) => {
    const table = await db.query(`UPDATE sede set aforo = ${quantity} where id_sede = ${id};`).then(res => {
        return true;
    }).catch(e => {
        console.log(e);
        //enviar error por correo
        return false;
    });
    return table;

}

module.exports = {
    callAforo,
    callSedeconDistrito,
    callTSedes,
    callUpdateAforo
}