const database = require('../models/db');

const db = database.pool;

export const getDistrito = async(provincia) =>{
    
    const table = await db.query(`
    Select NOMBRE 
    from DISTRITO d left join PROVINCIA p where d.ID_PROVINCIA = p.ID_PROVINCIA
    where p.NOMBRE= '${provincia}'`).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;  
}
