import { Store } from '../index.store'
import { AuthStore } from './auth.store'

export class ServiceStore {
  // store: Store
  authStore: AuthStore

  constructor(store: any) {
    // this.store = store
    this.authStore = new AuthStore(this)
  }

}