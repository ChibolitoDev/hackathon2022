const database = require('../models/db');

const db = database.pool;

const getProvinciaByDepa = async(departamento_id) =>{
    
    const table = await db.query(`
    Select p.ID_PROVINCIA, p.NOMBRE 
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
        select ID_PROVINCIA, NOMBRE from PROVINCIA
    `).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;
}


const getProvinciaSede = async() => {
    const table = await  db.query(`
    select distinct pro.* 
    from provincia pro join ( select distinct dtr.*
    from distrito dtr
     left join sede on sede.id_distrito = dtr.id_distrito
    where id_sede is not null  ) x on x.id_provincia = pro.id_provincia
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
    getTProvincias,
    getProvinciaSede
}