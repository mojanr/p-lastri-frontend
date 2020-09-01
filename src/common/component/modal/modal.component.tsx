import React, { memo, FunctionComponent, ReactNode } from 'react'
import { Modal } from 'antd'
import { ModalProps } from 'antd/lib/modal'
import { observable, action, computed } from 'mobx'

// store 
export class ModalStore {
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

interface ModalComponentProps extends ModalProps {
  children?: string | ReactNode
}

const ModalComponent: FunctionComponent<ModalComponentProps> = (props) => {
  return (
    <Modal {...props} destroyOnClose={true}>
      {props.children}
    </Modal>
  )
}

export default memo(ModalComponent)