import Usuario from "../models/Usuarios.js"
import generarId from "../helpers/generarId.js"
import generarJWT from "../helpers/generarJWT.js"
import { emailRegistro } from "../helpers/email.js";

const registrar = async (req, res) => {
    // Const para verificacion de correo
    const { correo } = req.body;

    // Evitar registros duplicados
    const existeUsuario = await Usuario.findOne({ correo });

    if(existeUsuario) {
        const error = new Error("usuario ya registrados");
        return res.status(400).json({ msg: error.message });
    };

    try {
        const usuario = new Usuario(req.body);
        usuario.token = generarId();
        await usuario.save()

        // ENviar Email confirmacion
        emailRegistro({
            correo: usuario.correo,
            nombre: usuario.nombre,
            token: usuario.token,
        })

        res.json({ msg: "Usuario Creado Correctamente, Revisa tu Email para confirmar tu cuenta" });
    } catch (error) {
        console.log(error)
    };
}


const autenticar = async (req, res) => {
    const { correo, contraseña } = req.body;
    
    // Comprobar existencia del usuario en las 3 bases
    const usuario = await Usuario.findOne({ correo });
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
    if(await usuario.comprobarContraseña(contraseña)) {
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            correo: usuario.correo,
            token: generarJWT(usuario._id),
        })

    } else {
        const error = new Error("El password es incorrecto");
        return res.status(403).json({ msg: error.message })
    }
}

const confirmar = async (req, res) => {
    const { token } = req.params
    const usuarioConfirmar = await Usuario.findOne({ token });
    if(!usuarioConfirmar) {
        const error = new Error("Token no valido");
        return res.status(403).json({ msg: error.message })
    };

    try {
        usuarioConfirmar.confirmado = true;
        usuarioConfirmar.token = "";
        await usuarioConfirmar.save();
        res.json({ msg: "Usuario Confirmado Correctamente" });

    } catch {
        console.log(error);
    }
};

const olvidePassword = async (req, res) => {
    const { correo } = req.body
    const usuario = await Usuario.findOne({ correo });
    if(!usuario) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({ msg: error.message });
    };

    try {
        usuario.token = generarId();
        await usuario.save()
        res.json({ msg: "Hemos enviado un correo con las instrucciones" })

    } catch (error) {
        console.log(error);
    };
};

const comprobarToken = async (req, res) => {
    const { token } = req.params;
    const tokenValido = await Usuario.findOne({ token });

    if(tokenValido) {
        res.json({ msg: "Token valido y el usuario existe" })
    } else {
        const error = new Error("Token no valido");
        return res.status(404).json({ msg: error.message });
    };
};

const nuevoPassword = async (req, res) => {
    const { token } = req.params;
    const { contraseña } = req.body;

    const usuario = await Usuario.findOne({ token });
    
    if(usuario) {
        usuario.contraseña = contraseña;
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
}