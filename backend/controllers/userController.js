import {  Profesional, Empresa, Administrador } from "../models/Usuarios.js"
import generarId from "../helpers/generarId.js"

//crear const "Eleccion" que reciba el tipo de usuario que se va a crear

const registrar = async (req, res) => {
    // Const para verificacion de correo
    const { correo } = req.body;

    //Verificar el tipo de usuario
    const { tipoUsuario } = req.body;
    
    if(tipoUsuario == "profesional") {
        // Evitar registros duplicados
        const existeUsuario = await Profesional.findOne({ correo });

        if(existeUsuario) {
            const error = new Error("usuario ya registrados");
            return res.status(400).json({ msg: error.message });
        };

        try {
            const profesionalUser = new Profesional(req.body);
            profesionalUser.token = generarId();
            const usuarioAlmacenado = await profesionalUser.save();
            res.json(usuarioAlmacenado);
        } catch (error) {
            console.log(error)
        };

    } else if(tipoUsuario == "empresa") {
        // Evitar registros duplicados
        const existeUsuario = await Empresa.findOne({ correo });

        if(existeUsuario) {
            const error = new Error("usuario ya registrados");
            return res.status(400).json({ msg: error.message });
        };
        
        try {
            const empresaUser = new Empresa(req.body);
            empresaUser.token = generarId(); 
            const usuarioAlmacenado = await empresaUser.save();
            res.json(usuarioAlmacenado);
        } catch (error) {
            console.log(error)
        };

    } else if(tipoUsuario == "administrador") {
        const existeUsuario = await Administrador.findOne({ correo });

        if(existeUsuario) {
            const error = new Error("usuario ya registrados");
            return res.status(400).json({ msg: error.message });
        };
    
        try {
            const administradorUser = new Administrador(req.body);
            administradorUser.toke = generarId();
            const usuarioAlmacenado = await administradorUser.save();
            res.json(usuarioAlmacenado);
        } catch (error) {
            console.log(error)
        };
    }
}

export { 
    registrar
}