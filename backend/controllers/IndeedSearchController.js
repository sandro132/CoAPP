import IndeedSearch from "../models/IndeedSearch.js"


// Controlador para buscar y almacenar trabajos de Indeed
async function buscarYAlmacenarTrabajos(req, res) {
    try {
        // Realiza la solicitud a la API de Indeed y obtiene los datos
        const indeedData = await indeedAPI.obtenerTrabajos(req.query.parametros);

        // Almacena los datos en la base de datos utilizando el modelo de Mongoose
        await IndeedSearch.create(indeedData);

        return res.status(200).json({ message: 'Datos de Indeed almacenados exitosamente.' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al buscar y almacenar datos de Indeed.' });
    }
}

module.exports = {
    buscarYAlmacenarTrabajos,
};
