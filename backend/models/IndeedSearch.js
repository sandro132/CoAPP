import mongoose from "mongoose";

const indeedSchema = new mongoose.Schema({
    jobTitle: String, // Título del trabajo
    company: String, // Nombre de la empresa
    salary: Number, // Salario (ajusta el tipo de dato según tus necesidades)
    // Otros campos específicos de Indeed que desees almacenar
});

const IndeedModel = mongoose.model('IndeedJob', indeedSchema);

module.exports = IndeedModel;
