import { ApiService } from "./api.service";

interface CreateUserDto {
  name: string
  email: string
  role: string
  password: string
  confirmPassword: string
}

interface UpdateUserDto {
  name: string
  email: string
  role: string
}

interface ResetPassword {

}

export class UserService extends ApiService {
  
  constructor() {
    super()
  }

  // get all user
  async getAllUser() {
    return this.api.get('/user')
  }

  // get user by id
  async getUserById(userId: string) {
    return this.api.get(`/user/${userId}`)
  }

  // create new user
  async createUser(userData: CreateUserDto) {
    return this.api.post('/user', userData)
  }

  // update user
  async updateUser(userId: string, userData: UpdateUserDto) {
    return this.api.put(`/user/${userId}`, userData)
  }

  // lock user
  async lock(userId: string) {
    return this.api.patch(`/user/${userId}/lock`)
  }

  // unlock user
  async unlock(userId: string) {
    return this.api.patch(`/user/${userId}/unlock`)
  }

  // reset password

}