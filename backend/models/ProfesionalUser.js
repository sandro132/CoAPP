import mongoose from "mongoose";
import Address from "./AddresSchema.js";

const profesionalUserSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true // Elimina espacios de incio y fin
    },
    contraseña: {
        type: String,
        require: true,
        trim: true
    },
    correo: {
        type: String,
        require: true,
        trim: true,
        unique: true //Garantiza que no sea un correo ya registrado
    },

//    direccion: Address,
    
    token: {
        type: String
    },
    confirmado: {
        type: Boolean,
        default: false
    },
},
{
    timestamps: true,
},
);

const ProfesionalUser = mongoose.model("ProfesionalUser", profesionalUserSchema);
export default ProfesionalUser;
