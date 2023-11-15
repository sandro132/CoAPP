import { JobServiceClient } from '@google-cloud/talent/build/src/v4/index.js';

const projectId = 'coapp-404122';
const talentClient = new JobServiceClient();

// Credenciales proporcionadas


// Crea una instancia del cliente de Cloud Talent Solution con las credenciales

// Función para buscar y visualizar trabajos
  // Construye la solicitud de búsqueda
  const request = {
    parent: `projects/${projectId}`,
    requestMetadata: {
      userId: "UNKNOWN",
      domain: "UNKNOWN",
      sessionId: "UNKNOWN",
      domain: "googleapis.com"
    },
    jobQuery: {
        "query": "developer",
        // "location": {
        //   "countryCode": "CO",
        //   "regionCode": "CO-ANT",
        //   "city": "Medellín"
        // },
      }
  }

  // Realiza la búsqueda de trabajos
  const response = await talentClient.searchJobs(request);

// Verifica si matchingJobs existe antes de intentar iterar sobre él
if (response.matchingJobs) {
  const matchingJobs = response.matchingJobs;

  // Imprime los resultados
  console.log('Trabajos encontrados:');
  matchingJobs.forEach((job) => {
    console.log(`Título: ${job.jobTitle}`);
    console.log(`Empresa: ${job.companyName}`);
    // console.log(`Ubicación: ${job.location && job.location.length ? job.location[0] : 'No especificada'}`);
    console.log('---');
  });
} else {
  console.log('No se encontraron trabajos.');
}// Llama a la función para visualizar trabajos
