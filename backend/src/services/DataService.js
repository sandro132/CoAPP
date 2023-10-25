// services/dataService.js
const axios = require('axios');
const GlassdoorJob = require('../models/jobModel');
const UserModel = require('../models/userModel');
const mongoose = require('mongoose');
const apiKeyGlassdoor = 'TU_CLAVE_API_GLASSDOOR';
const apiKeyLinkedIn = 'TU_CLAVE_API_LINKEDIN';
const apiKeyIndeed = 'TU_CLAVE_API_INDEED';

// Función para realizar búsquedas en las tres APIs y almacenar datos en la base de datos
async function busquedaAlmacenamientoDatos() {
    try {
        // Realiza solicitudes a las tres APIs y procesa los datos
        const glassdoorData = await axios.get('URL_GLASSDOOR', { params: { api_key: apiKeyGlassdoor } });
        const linkedInData = await axios.get('URL_LINKEDIN', { params: { api_key: apiKeyLinkedIn } });
        const indeedData = await axios.get('URL_INDEED', { params: { api_key: apiKeyIndeed } });

        // Procesa los datos y crea instancias de modelos
        const glassdoorJobs = glassdoorData.data.map((job) => {
            return new GlassdoorJob(job.title, job.employer, job.salary);
        });
    const linkedInUsers = linkedInData.data.map((user) => {
        return new UserModel(user.name, user.title, user.location);
    });
    const indeedJobs = indeedData.data.map((job) => {
        return new GlassdoorJob(job.jobTitle, job.company, job.salary);
    });

    // Almacena los datos en la base de datos MongoDB
    await GlassdoorJob.insertMany(glassdoorJobs);
    await UserModel.insertMany(linkedInUsers);
    await GlassdoorJob.insertMany(indeedJobs);

    console.log('Datos almacenados exitosamente en la base de datos.');
    } catch (error) {
        console.error('Error al buscar y almacenar datos:', error);
    }
}

module.exports = {
    busquedaAlmacenamientoDatos,
};
