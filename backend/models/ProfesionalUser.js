import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Address from "./AddresSchema.js";

const profesionalUserSchema = mongoose.Schema(
    {
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

// Este codigo se ejecutara antes de almacenar en la base de datos
profesionalUserSchema.pre("save", async function(next) {
    if(!this.isModified("contraseña")) { // al llamar la funcion no se esta modificando la contraseña, no se ejecutara el hasheo
        next()
    };
    
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
}) 

const ProfesionalUser = mongoose.model("ProfesionalUser", profesionalUserSchema);
export default ProfesionalUser;
