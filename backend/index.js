import express from "express";
import dotenv from "dotenv"
import conectarDB from "./config/db.js";
import router from "./routes/usuarioRoutes.js";

const app = express();

dotenv.config()

conectarDB();

// Routing
app.use('/api/usuarios', router)


const PORT = process.env.PORT || 4000

app.listen(PORT, () =>{
    console.log(`Conexion exitosa con el puerto ${PORT}`)
});