import {addTodo} from '../src/api'


const express = require("express");
const sql = require("mssql");
const cors = require("cors");
const { config } = require("dotenv");


require("dotenv").config(); //Referencia meter datos para login a SQL server

const app = express();
app.use(cors());
app.use(express.json());


const sqlConfig = {
    user :process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    server:process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT),
    database:process.env.DB_DATABASE,
    options:{
        encrypt:false,
        trustServerCertificate:true,

    },
};


app.get("/todos", async(req, res)=>{
    try{
        await sql.connect(sqlConfig);
        const result = await sql.query("SELECT * FROM Todos");
        res.json(result.recordset);
        await sql.close();
    }catch(err){
        console.error(err);
        res.status(500).send("Error en el servidor");
    }
});


app.post("/todos", async(req,res)=>{
    const {title} = req.body;
    try{
        await sql.connect(sqlConfig);
        await sql.query`INSERT INTO Todos (title) VALUES (${title}`;
        res.status(201).send("Tarea agregada");
        sql.close();
    }catch(err){
        console.error(err);
        res.status(500).send("Error al insertar");
    }
});


const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`API corriendo en https://localhost:${PORT}`);
});






