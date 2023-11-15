import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import conectarDB from "./config/db.js";
import router from "./routes/usuarioRoutes.js";

const app = express();
app.use(express.json()) //Permite procesar la informacion tipo json

// Habilitando variables de entorno
dotenv.config()

// COnexion a la base de datos
conectarDB();

// configurar cors
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin, callback) {
        if(whitelist.includes(origin)) {
            // Puede constultar la API
            callback(null, true);
        } else {
            // No puede consultar la API
            callback(new Error("Acceso no permitido por CORS"));
        }
    },
};

app.use(cors(corsOptions));

// Routing
app.use('/api/usuarios', router)
//TODO;

// Puerto de conexion
const PORT = process.env.PORT || 4000

app.listen(PORT, () =>{
    console.log(`Conexion exitosa con el puerto ${PORT}`)
});