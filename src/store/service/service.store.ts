import { Store } from "store/index.store";
import { Api } from 'service/_index.service'
import { action, computed, observable, toJS } from "mobx";

export class ServiceStore {
  store: Store
  // service data
  @observable
  servicesData = []

  constructor(store: any) {
    this.store = store
  }

  // fetch services
  @action
  async fetchServices() {
    try {
      console.log(`[SERVICES] - Fetch SERVICES`)
      const result = await Api.serviceService.getServices()
      this.servicesData = result.data
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

  // get services
  @computed
  get getServices() {
    return toJS(this.servicesData)
  }

  // create service
  async createService(serviceData: any) {
    try {
      console.log(`[SERVICES] - Create Service`, serviceData)
      const result = await Api.serviceService.createService(serviceData)
      await this.fetchServices()
      return result.status == 200 || result.status == 201 ? true : false
    } catch (error) {
      return false
    }
  }

}