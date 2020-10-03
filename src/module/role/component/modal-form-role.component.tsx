import React, { memo, FunctionComponent, ReactNode, createContext, useContext } from 'react'
import ModalComponent, { ModalStore } from 'common/component/modal/modal.component'
import { observer } from 'mobx-react'
import { useStore } from 'store/index.store'
import { observable, action, computed } from 'mobx'
import FormRoleComponent from './form-role.component'

export class ModalFormRoleStore {
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
const context = createContext(new ModalFormRoleStore)
// use context
export const useModalFormRole = () => useContext(context)

const ModalFormRoleComponent: FunctionComponent = () => {
  // use modal form role
  const modalFormRole = useModalFormRole()

  // close modal
  const closeModalFormRole = () => modalFormRole.close()

  return (
    <ModalComponent
      title="Form Role"
      visible={modalFormRole.isOpen}
      onCancel={closeModalFormRole}
      footer={null}
    >
      <FormRoleComponent />
    </ModalComponent>
  )
}

export default memo(observer(ModalFormRoleComponent))
