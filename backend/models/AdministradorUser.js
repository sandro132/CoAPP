import mongoose from "mongoose";

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
    token: {
        type: String
    }
})

const AdministradorUser = mongoose.model("AdministradorUser", AdminitradorUserSchema);
export default AdministradorUser;