import { JobServiceClient } from '@google-cloud/talent/build/src/v4/index.js';

const talentClient = new JobServiceClient();
const parent = "projects/coapp-404122"
const filter = 'requisitionId="sales"';
const pageSize = 10
const jobView = "JOB_VIEW_ID_ONLY"

async function searchJobs () {
  try {
    const request = {
      parent,
      requestMetadata: {
        userId: "UNKNOWN",
        domain: "UNKNOWN",
        sessionId: "UNKNOWN"
      },
      filter,
      jobQuery: {
        query: "backend",
      },
      pageSize,
      view: jobView,
    };

      const iterable = await talentClient.listJobsAsync(request);
      console.log("Success seach jobs")
      for await (const response of iterable) {
        console.log(response);
      }
    } catch(error) {
      console.error('Error al buscar trabajos', error);
    }
}


searchJobs();
