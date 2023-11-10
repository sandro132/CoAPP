import { JobServiceClient } from '@google-cloud/talent/build/src/v4/index.js';

const projectId = 'coapp-404122';

// Crea una instancia del cliente de Cloud Talent Solution
const talentClient = new JobServiceClient();

// Función para buscar y visualizar trabajos
async function visualizarTrabajos() {
  try {
    // Construye la solicitud de búsqueda
    const request = {
      parent: `projects/${projectId}`,
      requestMetadata: {
        userId: "UNKNOWN",
        domain: "UNKNOWN",
        sessionId: "UNKNOWN"
      },
      jobQuery: {
        query: "backend",
        locationFilters: {
          addresses: ['Colombia']
        }
      }
      // Puedes personalizar la solicitud según tus necesidades
      // Más detalles sobre las opciones de búsqueda: https://cloud.google.com/talent-solution/job-search/docs/reference/rest/v4/projects.jobs/search
    };

    // Realiza la búsqueda de trabajos
    const [response] = await talentClient.searchJobs(request);

    // Imprime los trabajos encontrados
    console.log('Trabajos encontrados:');
    response.matchingJobs.forEach((job, index) => {
      console.log(`Trabajo ${index + 1}:`);
      console.log(`Título: ${job.jobTitle}`);
      console.log(`Nombre de la empresa: ${job.companyName}`);
      console.log(`Ubicación: ${job.addresses && job.addresses.length ? job.addresses[0] : 'No especificada'}`);
      console.log('---');
    });

  } catch (error) {
    console.error('Error al buscar trabajos:', error);
  }
}

// Llama a la función para visualizar trabajos
visualizarTrabajos();