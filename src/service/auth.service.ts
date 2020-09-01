import { ApiService } from "./api.service";

export interface LoginDto {
  email: string
  password: string
}

export interface RegisterDto {
  namaPerusahaan: string
  npwpPerusahaan: string
  email: string
  password: string
  confirmPassword: string
}

export class AuthService extends ApiService {

  constructor() {
    super()
  }

  // login
  async login(loginData: LoginDto) {
    return this.api.post('/auth/login', loginData)
  }

  async register(registerData: RegisterDto) {
    return this.api.post('/auth/register', registerData)
  }
  
}