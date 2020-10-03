import { ApiService } from "./api.service";

// create role dto
interface CreateRole {
  name: string
  description?: string
}

export class RoleService extends ApiService {

  constructor() {
    super()
  }

  // get all roles
  async getRoles() {
    return this.api.get(`/role`)
  }

  // create role
  async createRole(roleData: CreateRole) {
    return this.api.post('/role', roleData)
  }
  
}