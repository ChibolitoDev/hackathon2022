const database = require('../models/db');

const db = database.pool;

const getProvinciaByDepa = async(departamento_id) =>{
    
    const table = await db.query(`
    Select p.NOMBRE 
    from PROVINCIA p 
    where p.ID_DEPARTAMENTO= '${departamento_id}'`).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;  
}

const getTProvincias = async()=>{
    const table = await  db.query(`
        select NOMBRE from PROVINCIA
    `).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;
}

module.exports = {
    getProvinciaByDepa,
    getTProvincias
}