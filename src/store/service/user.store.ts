import { Store } from "store/index.store";
import { Api } from 'service/_index.service'
import { action, computed, observable, toJS } from "mobx";

export class UserStore {
  store: Store
  // users data
  @observable
  usersData = []

  constructor(store: any) {
    this.store = store
  }

  // fetch users
  @action
  async fetchUsers() {
    try {
      console.log(`[USERS] - Fetch Users`)
      const result = await Api.userService.getUsers()
      this.usersData = result.data
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // get users
  @computed
  get getUsers() {
    return toJS(this.usersData)
  }

  // create user
  async createUser(userData: any) {
    try {
      console.log(`[USERS] - Create User`, userData)
      const result = await Api.userService.createUser(userData)
      await this.fetchUsers()
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

}