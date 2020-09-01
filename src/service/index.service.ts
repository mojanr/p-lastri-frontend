import { AuthService } from "./auth.service"

class Service {
  authService: AuthService

  constructor() {
    this.authService = new AuthService()
  }
}

export const api = new Service()