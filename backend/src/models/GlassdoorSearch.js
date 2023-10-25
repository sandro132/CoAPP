const mongoose = require('mongoose');

const glassdoorSchema = new mongoose.Schema({
    jobTitle: String, // Título del trabajo
    company: String, // Nombre de la empresa
    salary: Number, // Salario (puedes ajustar el tipo de dato según tus necesidades)
    // Otros campos específicos de Glassdoor que desees almacenar
});

const GlassdoorModel = mongoose.model('GlassdoorJob', glassdoorSchema);

module.exports = GlassdoorModel;
