const {Pool } = require('pg');

const pool = new Pool ({
    host: ENV.HOST,
    user: ENV.USER,
    password: ENV.PASSWORD,
    database: ENV.DATABASE,
    port: ENV.PORT
})

module.exports = {pool}