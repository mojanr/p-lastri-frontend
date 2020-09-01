import React, { memo, FunctionComponent, ReactNode, createContext, useContext } from 'react'
import ModalComponent, { ModalStore } from 'common/component/modal/modal.component'
import { observer } from 'mobx-react'
import { useStore } from 'store/index.store'
import { observable, action, computed } from 'mobx'
import FormUserComponent from './form-user.component'

export class ModalFormUserStore {
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
const context = createContext(new ModalFormUserStore)
// use context
export const useModalFormUser = () => useContext(context)

const ModalFormUserComponent: FunctionComponent = () => {
  // use modal form user
  const modalFormUser = useModalFormUser()

  // close modal
  const closeModalFormUser = () => modalFormUser.close()

  return (
    <ModalComponent
      title="Form User"
      visible={modalFormUser.isOpen}
      onCancel={closeModalFormUser}
      footer={null}
    >
      <FormUserComponent />
    </ModalComponent>
  )
}

export default memo(observer(ModalFormUserComponent))
