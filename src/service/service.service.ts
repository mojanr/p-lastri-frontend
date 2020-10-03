import { ApiService } from "./api.service";

// create service dto
interface CreateService {
  name: string
  description?: string
}

export class ServiceService extends ApiService {

  constructor() {
    super()
  }

  // get all services
  async getServices() {
    return this.api.get(`/service`)
  }

  // create service
  async createService(serviceData: CreateService) {
    return this.api.post('/service', serviceData)
  }
  
}