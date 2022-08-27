const database = require('../models/db');

const db = database.pool;

const getDistritoByProv = async(provincia_id) =>{
    
    const table = await db.query(`
    Select d.NOMBRE 
    from DISTRITO d join PROVINCIA p where d.ID_PROVINCIA = p.ID_PROVINCIA
    where p.ID_PROVINCIA= '${provincia_id}'`).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;  
}

const getTDistritos = async()=>{
    const table = await  db.query(`
        select NOMBRE from DISTRITO
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
