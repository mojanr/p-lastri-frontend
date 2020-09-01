import { Store } from '../index.store'
// import { ModalFormUserStore } from 'module/user/component/modal-form-user.component'

export class UiStore {
  store: Store
  // modalFormUser: ModalFormUserStore

  constructor(store: any) {
    this.store = store
    // this.modalFormUser = new ModalFormUserStore()
  }

}