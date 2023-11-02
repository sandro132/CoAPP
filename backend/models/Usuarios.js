import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = mongoose.Schema(
    {
        tipoUsuario: {
            type: String,
            required: false,
            enum: ["profesional", "empresa", "administrador"], // Valores permitidos
        },
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
usuarioSchema.pre("save", async function(next) {
    if(!this.isModified("contraseña")) { // al llamar la funcion no se esta modificando la contraseña, no se ejecutara el hasheo
        next()
    };
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
});

// Verifica si la contraseña escrita coincide con la de la base de datos
usuarioSchema.methods.comprobarContraseña = async function (contraseñaFormulario) {
    return await bcrypt.compare(contraseñaFormulario, this.contraseña)
};

const Usuario = mongoose.model("Usuarios", usuarioSchema)
export default Usuario