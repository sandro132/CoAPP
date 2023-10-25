const GlassdoorModel = require("../models/GlassdoorSearch");

// Controlador para buscar y almacenar trabajos de Glassdoor
async function buscarYAlmacenarTrabajos(req, res) {
  try {
    // Realiza la solicitud a la API de Glassdoor y obtiene los datos
    const glassdoorData = await glassdoorAPI.obtenerTrabajos(req.query.parametros);

    // Almacena los datos en la base de datos utilizando el modelo de Mongoose
    await GlassdoorModel.create(glassdoorData);

    return res.status(200).json({ message: 'Datos de Glassdoor almacenados exitosamente.' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al buscar y almacenar datos de Glassdoor.' });
  }
}

module.exports = {
  buscarYAlmacenarTrabajos,
};
