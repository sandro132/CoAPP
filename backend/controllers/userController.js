import Usuario from "../models/Usuarios.js"
import generarId from "../helpers/generarId.js"
import generarJWT from "../helpers/generarJWT.js"
import { emailRegistro, emailOlvidePassword } from "../helpers/email.js" 


const registrar = async (req, res) => {
    // Const para verificacion de correo
    const { email } = req.body;

    // Evitar registros duplicados
    const existeUsuario = await Usuario.findOne({ email });

    if(existeUsuario) {
        const error = new Error("usuario ya registrados");
        return res.status(400).json({ msg: error.message });
    };

    try {
        // Creacion de usuario y almacenamiento en mongodb
        const usuario = new Usuario(req.body);
        usuario.token = generarId();
        await usuario.save();
        
        // Enviar Email confirmacion
        emailRegistro({
            email: usuario.email,
            name: usuario.name,
            token: usuario.token
        })
        res.json({ msg: "Usuario Creado Correctamente, Revisa tu Correo para confirmar tu cuenta" });
    } catch (error) {
        console.log(error)
    };
}

const autenticar = async (req, res) => {
    const { email, password } = req.body;

    // Comprobar existencia del usuario
    const usuario = await Usuario.findOne({email});

    if (!usuario) {
        const error = new Error("El Usuario no existe");
        return res.status(404).json({ msg: error.message });
    }
    // Comprobar el usuario confirmado
    if (!usuario.confirmado) {
        const error = new Error("Tu cuenta no ha sido confirmada");
        return res.status(403).json({ msg: error.message });
    }
    // Comprobar password
    if(await usuario.comprobarContraseña(password)) {
        res.json({
            _id: usuario._id,
            name: usuario.name,
            email: usuario.email,
            typeUser: usuario.typeUser,
            token: generarJWT(usuario._id),
        })
    } else {
        const error = new Error("El password es incorrecto");
        return res.status(403).json({ msg: error.message })
    }
}

const confirmar = async (req, res) => {
    try {
        const { token } = req.params;
        const usuarioConfirmar = await Usuario.findOne({ token });
        
        if(usuarioConfirmar) {
            // Cambio estado de corfimacion de la cuenta y eliminacion de token
            usuarioConfirmar.confirmado = true;
            usuarioConfirmar.token = "";
            await usuarioConfirmar.save();
            res.json({ msg: "Usuario Confirmado Correctamente" });
        } else {
            const error = new Error("Token no valido");
            return res.status(403).json({ msg: error.message })
        }
    } catch {
        console.log(error);
    }
};

// recuperacion de contraseña
const olvidePassword = async (req, res) => {
    const { email } = req.body
    const usuario = await Usuario.findOne({ email });

    if(!usuario) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({ msg: error.message });
    };

    try {
        // creacion nuevo token de confirmacion
        usuario.token = generarId();
        await usuario.save();

        // Enviar el email
        emailOlvidePassword({
            name: usuario.name,
            email: usuario.email,
            token: usuario.token,
        })
        res.json({ msg: "Hemos enviado un correo con las instrucciones" })

    } catch (error) {
        console.log(error);
    };
};

// Confirmacion del token de recuperacion de contraseña
const comprobarToken = async (req, res) => {
    const { token } = req.params;
    // Verificacion del token en la base de datos
    const tokenValido = await Usuario.findOne({ token });

    if(tokenValido) {
        res.json({ msg: "Token valido y el usuario existe" })
    } else {
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    };
};

// Actualizacion de nueva contraseña en la base de datos
const nuevoPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    const usuario = await Usuario.findOne({ token });

    if(usuario) {
        usuario.password = password;
        usuario.token = "";
        try {
            await usuario.save();
            res.json({ msg: "Password Modificado Correctamente" })
        } catch (error) {
            console.log(error)
        }

    } else {
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    };
}

const perfil = async (req, res) => {
    const { usuario } = req;
// configurar el tipo usuario
    console.log(usuario)
    res.json(usuario);
}

export {
    registrar,
    autenticar,
    confirmar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    perfil,
};