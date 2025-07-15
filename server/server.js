const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {sql, poolPromise} = require('./db');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.DB_PORT || 5000;

app.listen(PORT, ()=>console.log(`Servidor corriendo en ${PORT}`));


app.get("/todos",async (req, res)=>{
    try{
        const pool = await poolPromise;
        const result = await pool.request().query("SELECT * FROM Todos");
        console.log(result);

        res.status(200).json({
            sucesss:true,
            empData:result.recordset
        })
    }catch(err){
        console.log(`Error`,error);
        res.status(500).json({
            sucesss:false,
            message:"Server error,Try again",
            error:error.message
        });
    }
})

