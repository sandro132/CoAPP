"use strict"

const express = require ("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3900;

// Cargamos body-parser oara analizar los bodys a travez del url

app.use(bodyParser.urlencoded({extended: false}));

// Convertimos las peticiones a json
app.use(bodyParser.json());

// Activamos el CORS para las peticiones Asincronas desde ek frontend
app.use((req, res, next) =>{
    res.header("Acces-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Header", "Authorization, X-API-KEY, Origin,")
})

app.listen(port, () =>{
    console.log("Conexion exitosa con el puerto " + port)
});