const database = require('../models/db');

const db = database.pool;

export const getProvincia = async(departamento) =>{
    
    const table = await db.query(`
    Select NOMBRE 
    from PROVINCIA p left join DEPARTAMENTO d where d.ID_DEPARTAMENTO = p.ID_DEPARTAMENTO
    where d.NOMBRE= '${departamento}'`).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;  
}
