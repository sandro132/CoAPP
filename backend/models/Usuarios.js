import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = mongoose.Schema(
    {
        typeUser: {
            type: String,
            require: true,
            enum: ["Profesional", "Empresa", "Administrador"], // Valores permitidos
        },
        name: {
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


// Hasheo
usuarioSchema.pre("save", async function(next) {
    if(!this.isModified("password")) { // al llamar la funcion no se esta modificando la contraseña, no se ejecutara el hasheo
        next()
    };
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Verifica si la contraseña escrita coincide con la de la base de datos
usuarioSchema.methods.comprobarContraseña = async function (contraseñaFormulario) {
    return await bcrypt.compare(contraseñaFormulario, this.password)
};

const Usuario = mongoose.model("Usuarios", usuarioSchema)
export default Usuario