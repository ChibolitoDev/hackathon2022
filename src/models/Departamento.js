const database = require('../models/db');

const db = database.pool;

const getDepartamentosProvincia = async() =>{   
    const table = await db.query(`
    Select ID_DEPARTAMENTO, NOMBRE 
    from DEPARTAMENTO 
    where NOMBRE != 'Lima'`).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;  
}

const getLima = async()=>{
    const table = await  db.query(`
        select ID_DEPARTAMENTO, NOMBRE from DEPARTAMENTO where NOMBRE = 'Lima'
    `).then( res => {
        return res.rows;
     }).catch( e=>{

        //enviar error por correo
        return false;
    });
    return table;
}

module.exports = { 
    getDepartamentosProvincia,
    getLima

}


