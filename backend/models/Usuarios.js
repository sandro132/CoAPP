import mongoose from "mongoose";
import bcrypt from "bcrypt";

const profesionalUserSchema = mongoose.Schema(
    {
        tipoUsuario: {
            type: String,
            required: true,
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
const Profesional = mongoose.model("Profesional", profesionalUserSchema);

// Este codigo se ejecutara antes de almacenar en la base de datos

profesionalUserSchema.pre("save", async function(next) {
    if(!this.isModified("contraseña")) { // al llamar la funcion no se esta modificando la contraseña, no se ejecutara el hasheo
        next()
    };
    
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
});


const empresaUserSchema = mongoose.Schema(
    {
        tipoUsuario: {
            type: String,
            required: true,
            enum: ["profesional", "empresa", "administrador"],
        },
        nombre: {
            type: String,
            require: true,
            trim: true,
        },
        razon_social: {
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
        
        //direccion: Address,

        NIT: {
            type: Number,
            require: true,
            trim: true
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

const Empresa = mongoose.model("Empresa", empresaUserSchema);

empresaUserSchema.pre("save", async function(next) {
    if(!this.isModified("contraseña")) { // al llamar la funcion no se esta modificando la contraseña, no se ejecutara el hasheo
        next()
    };
    
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
})

const administradorUserSchema = mongoose.Schema(
    {
        tipoUsuario: {
            type: String,
            required: true,
            enum: ["profesional", "empresa", "administrador"],
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
        
        //direccion: Address,

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

const Administrador = mongoose.model("Administrador", administradorUserSchema);

administradorUserSchema.pre("save", async function(next) {
    if(!this.isModified("contraseña")) { // al llamar la funcion no se esta modificando la contraseña, no se ejecutara el hasheo
        next()
    };
    
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
})

export {
    Profesional,
    Empresa,
    Administrador,
}