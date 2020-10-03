import { ApiService } from "./api.service";

// interface provider data
interface RegisterProviderData {
  namaPerusahaan: string
  npwpPerusahaan: string
  email: string
  password: string
  confirmPassword: string
  isAgree: boolean
}

export class ProviderService extends ApiService {

  constructor() {
    super()
  }

  // get all provider
  async getProviders() {
    return this.api.get('/provider')
  }

  // create provider
  async createProvider(providerData: any) {
    return this.api.post(`/auth/register`, providerData)
  }

  // register provider
  async registerProvider(registerProviderData: RegisterProviderData) {
    return this.api.post('/auth/register', registerProviderData)
  }

}