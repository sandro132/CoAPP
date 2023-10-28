import mongoose from "mongoose";
import Address from "./AddresSchema";

const administradorUserSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true // Elimina espacios de incio y fin
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true //Garantiza que no sea un correo ya registrado
    },
    
    direccion: Address,

    token: {
        type: String
    }
})

const AdministradorUser = mongoose.model("AdministradorUser", administradorUserSchema);
export default AdministradorUser;