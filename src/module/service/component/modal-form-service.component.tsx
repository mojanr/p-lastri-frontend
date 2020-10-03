import React, { memo, FunctionComponent, ReactNode, createContext, useContext } from 'react'
import ModalComponent, { ModalStore } from 'common/component/modal/modal.component'
import { observer } from 'mobx-react'
import { useStore } from 'store/index.store'
import { observable, action, computed } from 'mobx'
import FormServiceComponent from './form-service.component'

export class ModalFormServiceStore {
  @observable show: boolean = false
  @observable data: any

  @action
  open(data?: any) {
    this.show = true
    this.data = data
  }

  @action
  close() {
    this.show = false
  }

  @computed
  get isOpen() {
    return this.show
  }

  @computed
  get getData() {
    return this.data
  }
}
// create context
const context = createContext(new ModalFormServiceStore)
// use context
export const useModalFormService = () => useContext(context)

const ModalFormServiceComponent: FunctionComponent = () => {
  // use modal form service
  const modalFormService = useModalFormService()

  // close modal
  const closeModalFormService = () => modalFormService.close()

  return (
    <ModalComponent
      title="Form Service"
      visible={modalFormService.isOpen}
      onCancel={closeModalFormService}
      footer={null}
    >
      <FormServiceComponent />
    </ModalComponent>
  )
}

export default memo(observer(ModalFormServiceComponent))
