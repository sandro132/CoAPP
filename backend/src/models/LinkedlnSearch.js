const mongoose = require('mongoose');

const linkedInSchema = new mongoose.Schema({
    name: String, // Nombre del usuario o profesional
    jobTitle: String, // Título del trabajo
    location: String, // Ubicación
    // Otros campos específicos de LinkedIn que desees almacenar
});

const LinkedInModel = mongoose.model('LinkedInUser', linkedInSchema);

module.exports = LinkedInModel;
