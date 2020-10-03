import React, { memo, FunctionComponent, ReactNode, createContext, useContext } from 'react'
import ModalComponent, { ModalStore } from 'common/component/modal/modal.component'
import { observer } from 'mobx-react'
import { useStore } from 'store/index.store'
import { observable, action, computed } from 'mobx'
import FormSubmissionTypeRequirementComponent from './form-submission-type-requirement.component'

export class ModalFormSubmissionTypeRequirementStore {
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
const context = createContext(new ModalFormSubmissionTypeRequirementStore)
// use context
export const useModalFormSubmissionTypeRequirement = () => useContext(context)

const ModalFormSubmissionTypeRequirementComponent: FunctionComponent = () => {
  // use modal form submissionType
  const modalFormSubmissionTypeRequirement = useModalFormSubmissionTypeRequirement()

  // close modal
  const closeModalFormSubmissionTypeRequirement = () => modalFormSubmissionTypeRequirement.close()

  return (
    <ModalComponent
      title="Form Dokumen Kebutuhan"
      visible={modalFormSubmissionTypeRequirement.isOpen}
      onCancel={closeModalFormSubmissionTypeRequirement}
      footer={null}
      // width={1000}
    >
      <FormSubmissionTypeRequirementComponent />
    </ModalComponent>
  )
}

export default memo(observer(ModalFormSubmissionTypeRequirementComponent))
