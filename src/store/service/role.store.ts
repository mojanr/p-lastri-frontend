import { Store } from "store/index.store";
import { Api } from 'service/_index.service'
import { action, computed, observable, toJS } from "mobx";

export class RoleStore {
  store: Store
  // roles data
  @observable
  rolesData = []

  constructor(store: any) {
    this.store = store
  }

  // fetch roles
  @action
  async fetchRoles() {
    console.log(`[ROLES] - Fetch Roles`)
    const result = await Api.roleService.getRoles()
    this.rolesData = result.data
  }
  
  // get roles
  @computed
  get getRoles() {
    return toJS(this.rolesData)
  }

  // create role
  async createRole(roleData: any) {
    console.log(`[ROLES] - Create Role`, roleData)
    const result = await Api.roleService.createRole(roleData)
    await this.fetchRoles()
    return result.status == 200 || result.status == 201 ? true : false
  }

}