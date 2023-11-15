import jwt from "jsonwebtoken"

// Creacion del jwt meidante id de creacion de usuario
const generarJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        // Rango de existencia del token
        expiresIn: "30d",
    })
}

export default generarJWT