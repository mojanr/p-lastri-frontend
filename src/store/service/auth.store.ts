import { Store } from "store/index.store";
import { Api } from 'service/_index.service'
import { LoginDto, RegisterDto } from 'service/auth.service'

export class AuthStore {
  store: Store

  constructor(store: any) {
    this.store = store
  }

  // login
  async login(loginData: LoginDto) {
    const result = await Api.authService.login(loginData)
    console.log(result)
    if (result?.data?.user !== false) {
      this.setToken(result.data.token)
      this.setUser(result.data.user)
      return result
    } else {
      return false
    }
  }

  async register(registerData: RegisterDto) {
    // const result = await api.authService.register(registerData)
    // console.log('register result', result)
    return Api.authService.register(registerData)
  }

  async getToken() {
    return await localStorage.getItem('token')
  }

  async getUser() {
    return await localStorage.getItem('user')
  }

  async setToken(token: any) {
    localStorage.setItem('token', token)
  }

  async setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  async isLogin() {
    return !!(await localStorage.getItem('token'))
  }

  async logout() {
    localStorage.removeItem('token')
  }

}