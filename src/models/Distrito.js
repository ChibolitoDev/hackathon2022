const database = require('../models/db');

const db = database.pool;

const getDistritoByProv = async(provincia_id) =>{
    
    const table = await db.query(`
    Select d.ID_DISTRITO, d.NOMBRE 
    from DISTRITO d 
    where d.ID_PROVINCIA= '${provincia_id}'`).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;  
}

const getTDistritos = async()=>{
    const table = await  db.query(`
        select ID_DISTRITO, NOMBRE from DISTRITO
    `).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;
}

module.exports = {
    getDistritoByProv,
    getTDistritos
}
