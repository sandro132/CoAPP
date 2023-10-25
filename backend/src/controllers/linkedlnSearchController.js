const LinkedInModel = require('../models/linkedinModel');

// Controlador para buscar y almacenar usuarios de LinkedIn
async function buscarYAlmacenarUsuarios(req, res) {
    try {
        // Realiza la solicitud a la API de LinkedIn y obtiene los datos
        const linkedinData = await linkedinAPI.obtenerUsuarios(req.query.parametros);

        // Almacena los datos en la base de datos utilizando el modelo de Mongoose
        await LinkedInModel.create(linkedinData);

        return res.status(200).json({ message: 'Datos de LinkedIn almacenados exitosamente.' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al buscar y almacenar datos de LinkedIn.' });
    }
}

module.exports = {
    buscarYAlmacenarUsuarios,
};
