import { Store } from "store/index.store";
import { api } from 'service/index.service'
import { LoginDto, RegisterDto } from 'service/auth.service'

export class AuthStore {
  store: Store
  
  constructor(store: any) {
    this.store = store
  }

  // login
  async login(loginData: LoginDto) {
    const result = await api.authService.login(loginData)
    console.log('login result', result)
  }

  async register(registerData: RegisterDto) {
    // const result = await api.authService.register(registerData)
    // console.log('register result', result)
    return api.authService.register(registerData)
  }

}