import { ApiService } from "./api.service";

export class ProviderService extends ApiService {

  constructor() {
    super()
  }

  // get provider list
  async getAllProvider() {
    return this.api.get('/provider')
  }

}