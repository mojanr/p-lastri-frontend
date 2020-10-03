import React, { memo, FunctionComponent } from 'react'
import { HeaderComponent, PageTransitionComponent } from 'common/component/index.component'
import { Button } from 'antd'
import TableSubmissionTypeComponent from '../component/table-submission-type.component'
import { PlusOutlined } from '@ant-design/icons'
import ModalFormSubmissionType, { useModalFormSubmissionType } from '../component/modal-form-submission-type.component'
import { observer } from 'mobx-react'

const SubmissionTypePage: FunctionComponent = () => {
  // use modal form submission type
  const modalFormSubmissionType = useModalFormSubmissionType()

  // open modal
  const openModalFormSubmissionType = () => modalFormSubmissionType.open()

  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent
        title="Jenis Pengajuan"
        extra={[
          <Button key="extra:1" type="primary" icon={<PlusOutlined />} onClick={openModalFormSubmissionType}> Create Jenis Pengajuan </Button>
        ]}
      />

      <TableSubmissionTypeComponent />

      {/* MODAL CREATE OR EDIT SUBMISSION TYPE */}
      <ModalFormSubmissionType />
    </PageTransitionComponent>
  )
}

export default memo(observer(SubmissionTypePage))
