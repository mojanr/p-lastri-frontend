import { createContext, useContext } from "react";
import { UiStore } from "./ui/ui.store";
import { ServiceStore } from "./service/service.store";
import { ModalStore } from "common/component/modal/modal.component";
import { ModalFormUserStore } from "module/user/component/modal-form-user.component";

export class Store {
  uiStore: UiStore
  serviceStore: ServiceStore
  // modalFormUser: ModalFormUserStore

  constructor() {
    this.uiStore = new UiStore(this)
    this.serviceStore = new ServiceStore(this)
    
    // this.modalFormUser = new ModalFormUserStore()
  }
}

// create context
const context = createContext(new Store())
// use context
export const useStore = () => useContext(context)