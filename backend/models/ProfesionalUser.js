import mongoose from "mongoose";

const profesionalUserSchema = mongoose.Schema({
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

const ProfesionalUser = mongoose.model("ProfesionalUser", profesionalUserSchema);
export default ProfesionalUser;
