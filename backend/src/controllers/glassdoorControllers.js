// controllers/glassdoorController.js
const axios = require('axios');
const GlassdoorJob = require('../services/GlassdoorJob');

const apiKey = 'TU_CLAVE_API';
const baseUrl = 'http://api.glassdoor.com/api/api.htm';

async function buscarTrabajos() {
    const areaTecnologia = 'tecnologia';
    const cargo = 'desarrollador'; // Funcion que recibira el parametro de la bsuqueda del usuario
    const salario = '60000-80000'; // Funcion que recibira el parametro de la bsuqueda del usuario
    const lenguaje = 'javascript'; // Funcion que recibira el parametro de la bsuqueda del usuario

    const params = {
        v: '1',
        format: 'json',
        't.p': apiKey,
        't.k': apiKey,
        userip: '0.0.0.0',
        useragent: 'Mozilla/5.0',
        action: 'jobs',
        q: areaTecnologia,
        jobTitle: cargo,
        pay: salario,
        l: lenguaje,
    };

    try {
        const response = await axios.get(baseUrl, { params });
        const jobsData = response.data.response.jobList;
        const jobs = jobsData.map((job) => {
            return new GlassdoorJob(job.jobTitle, job.employerName, job.pay);
        });
        return jobs;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    buscarTrabajos,
};
