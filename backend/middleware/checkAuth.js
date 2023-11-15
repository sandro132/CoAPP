import jwt from "jsonwebtoken"
import Usuario from "../models/Usuarios.js";

// chequeo del usuario autenticado mediante el token
const checkAut = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer") //Bearer significa que si se esta enviando un token al header 
    ) {

        // Verificacion del token con la firma y devolviendo el token decodificado
        try { 
            token = req.headers.authorization.split(' ')[1];
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.usuario = await Usuario.findById(decoded.id).select("-password -confirmado -token -createdAt -updatedAt -__v");
            
            return next()
        } catch (error) {
            return res.status(404).json({ msg: "Hubo un error" })
        };
    };

    if(!token) {
        const error = new Error("token no valido");
        return res.status(401).json({ msg: error.message })
    }
    next();
};

export default checkAut;