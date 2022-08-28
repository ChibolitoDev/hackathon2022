const database = require('../models/db');

const db = database.pool;

const getDistritoByProv = async (provincia_id) => {

    const table = await db.query(`
    select distinct dtr.*
    from distrito dtr
    left join sede on sede.id_distrito = dtr.id_distrito
    where id_sede is not null and dtr.ID_PROVINCIA= '${provincia_id}'`).then(res => {
        return res.rows;
    }).catch(e => {
        console.log(e);
        //enviar error por correo
        return false;
    });
    return table;
}

const getTDistritos = async () => {
    const table = await db.query(`
        select ID_DISTRITO, NOMBRE from DISTRITO
    `).then(res => {
        return res.rows;
    }).catch(e => {
        //enviar error por correo
        return false;
    });
    return table;
}

module.exports = {
    getDistritoByProv,
    getTDistritos
}
