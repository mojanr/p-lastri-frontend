import React, { memo, FunctionComponent, ReactNode, createContext, useContext } from 'react'
import ModalComponent, { ModalStore } from 'common/component/modal/modal.component'
import { observer } from 'mobx-react'
import { useStore } from 'store/index.store'
import { observable, action, computed } from 'mobx'
import FormSubmissionTypeComponent from './form-submission-type.component'

export class ModalFormSubmissionTypeStore {
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
const context = createContext(new ModalFormSubmissionTypeStore)
// use context
export const useModalFormSubmissionType = () => useContext(context)

const ModalFormSubmissionTypeComponent: FunctionComponent = () => {
  // use modal form submissionType
  const modalFormSubmissionType = useModalFormSubmissionType()

  // close modal
  const closeModalFormSubmissionType = () => modalFormSubmissionType.close()

  return (
    <ModalComponent
      title="Form Jenis Pengajuan"
      visible={modalFormSubmissionType.isOpen}
      onCancel={closeModalFormSubmissionType}
      footer={null}
      // width={1000}
    >
      <FormSubmissionTypeComponent />
    </ModalComponent>
  )
}

export default memo(observer(ModalFormSubmissionTypeComponent))
