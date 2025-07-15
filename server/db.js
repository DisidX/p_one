const sql = require('mssql');
const { server } = require('typescript');
require("dotenv").config();


const config = {
    server:process.env.DB_SERVER,
    database:process.env.DB_DATABASE,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    options:{
        encrypt:false,
        enableArithAbort:true
    },
    port:parseInt(process.env.DB_PORT)
}



//crear la conexion

const poolPromise = new sql.ConnectionPool(config)
.connect()
.then(pool =>{
    console.log('conectado ala base de datos')
    return pool;
})
.catch(err =>{
    console.error('Conexion fallada',err)
    throw err;

});


module.exports = [
    sql, poolPromise
];