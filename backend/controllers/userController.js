import ProfesionalUser from "../models/ProfesionalUser.js"
import AdministradorUser from "../models/AdministradorUser.js"
import EmpresaUser from "../models/EmpresaUser.js"


//crear const "Eleccion" que reciba el tipo de usuario que se va a crear

const registrar = async (req, res) => {
    // Evitar registros duplicados
    const { correo } = req.body;
    const existeUsuario = await ProfesionalUser.findOne({ correo });

    if(existeUsuario) {
        const error = new Error("usuario ya registrados");
        return res.status(400).json({ msg: error.message });
    }

    // Condicional para elegir el tipo de usuario
    try {
        const profesionalUser = new ProfesionalUser(req.body);
        const usuarioAlmacenado = await profesionalUser.save();
        res.json(usuarioAlmacenado);

    } catch (error) {
        console.log(error)
    };

    // try {
        // const empresaUser = new EmpresaUser(req.body);
        // const usuarioAlmacenado = await empresaUser.save();
        // res.json(usuarioAlmacenado);
    // } catch (error) {
    //     console.log(error)
    // };

    // try {
    //     const administradorUser = new AdministradorUser(req.body);
    //     const usuarioAlmacenado = await administradorUser.save();
    //     res.json(usuarioAlmacenado);
    // } catch (error) {
    //     console.log(error)
    // };

    
}


export { 
    registrar
}