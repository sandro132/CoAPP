import mongoose from "mongoose";

const empresaUserSchema = mongoose.Schema({
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

const EmpresaUser = mongoose.model("EmpresaUser", empresaUserSchema);
export default EmpresaUser;