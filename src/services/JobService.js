import { api } from "./AxiosService.js"
import {AppState} from '../AppState.js'

class JobService {

  async getJobs() {
    const response = await api.get('api/jobs')
    AppState.jobs = response.data.map(job => new Job(job))
  }

  async createJob(jobData){
    const response = await api.post('api/jobs', jobData)
    AppState.jobs.push(new Job(response.data))
  }

  async updateJob(updateJob){
    const response = await api.put(`api/jobs/${updateJob.id}`, updateJob)
    const indexToUpdate = AppState.jobs.findIndex(job => job.id == updateJob.id)
    AppState.jobs.splice(indexToUpdate, 1, new Job(response.data))
  }

  async deleteJob(jobId){
    const response = await api.delete(`api/jobs/${jobId}`)
    const indexToRemove = AppState.cars.findIndex(job => job.id == jobId)
    AppState.jobs.splice(indexToRemove,1)
  }

  setActiveJob(jobId){
    const selectedJob = AppState.jobs.find(job => job.id == jobId)
    AppState.activeJob = selectedJob
  }

}

export const jobService = new JobService()
