"use strict"

const express = require ("express");
const app = express();

const port = 3900;

app.listen(port, () =>{
    console.log("Conexion exitosa con el puerto" + port)
});