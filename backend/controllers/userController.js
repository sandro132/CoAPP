import ProfesionalUser from "../models/ProfesionalUser.js"
import EmpresaUser from "../models/EmpresaUser.js"
import AdministradorUser from "../models/AdministradorUser.js"


//crear const "Eleccion" que reciba el tipo de usuario que se va a crear

const registrar = async (req, res) => {
    console.log(req.body)
    // Condicional para elegir el tipo de usuario
    try {
        const profesionalUser = new ProfesionalUser(req.body)
        usuarioAlmacenado = await profesionalUser.save();
        res.json(usuarioAlmacenado);

    } catch (error) {
        console.log(error)
    };

    // try {
    //     const emp resaUser = new EmpresaUser(req.body)
    // } catch (error) {
    //     console.log(error)
    // };

    // try {
    //     const administradorUser = new AdministradorUser(req.body)
    // } catch (error) {
    //     console.log(error)
    // };

    
}


export { 
    registrar
}