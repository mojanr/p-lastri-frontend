import { Store } from "store/index.store"
import { Api } from 'service/_index.service'
import { action, computed, observable, toJS } from "mobx";

export class ProviderStore {
  store: Store
  // providers data
  @observable
  providersData = []

  constructor(store: any) {
    this.store = store
  }

  // fetch providers
  @action
  async fetchProviders() {
    console.log(`[PROVIDERS] - Fetch Providers`)
    const result = await Api.providerService.getProviders()
    this.providersData = result.data
  }

  // get providers
  @computed
  get getProviders() {
    return toJS(this.providersData)
  }

  // // create role
  // async createRole(providerData: any) {
  //   console.log(`[PROVIDERS] - Create Provider`, providerData)
  //   const result = await Api.providerService.createProvider(providerData)
  //   await this.fetchProviders()
  //   return result.status == 200 || result.status == 201 ? true : false
  // }

  // register provider
  async registerProvider(registerProviderData: any) {
    try {
      console.log(`[PROVIDERS] - Create Provider`, registerProviderData)
      const result = await Api.providerService.createProvider(registerProviderData)
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      console.log('catch error', error)
      return false
    }
  }

}