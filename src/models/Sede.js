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
    Select NOMBRE, AFORO, AFORO_MAX, DIRECCION, LATITUD, LONGITUD, IMG, UBIHTML  from SEDE where ID_SEDE = ${sede}
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
    Select NOMBRE, AFORO, AFORO_MAX, DIRECCION, LATITUD, LONGITUD, IMG, UBIHTML from SEDE
    WHERE ID_DISTRITO = ${distrito}
    `).then(res => {
        return res.rows;
    }).catch(e => {
        //enviar error por correo
        return false;
    });
    return table;

}



module.exports = {
    callAforo,
    callSedeconDistrito,
    callTSedes
}