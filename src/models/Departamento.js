const database = require('../models/db');

const db = database.pool;

const getDepartamentoById = async() =>{   
    const table = await db.query(`
    Select NOMBRE 
    from DEPARTAMENTO 
    where NOMBRE != 'Lima'`).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;  
}

const getTDepartamentos = async()=>{
    const table = await  db.query(`
        select NOMBRE from DEPARTAMENTO
    `).then( res => {
        return res.rows;
     }).catch( e=>{
        //enviar error por correo
        return false;
    });
    return table;
}

module.exports = { 
    getDepartamentoById,
    getTDepartamentos

}


