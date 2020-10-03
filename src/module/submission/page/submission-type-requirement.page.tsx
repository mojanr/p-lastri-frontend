import React, { memo, FunctionComponent } from 'react'
import { HeaderComponent, PageTransitionComponent } from 'common/component/index.component'
import { Button } from 'antd'
// import TableSubmissionTypeComponent from '../component/table-submission-type.component'
import { PlusOutlined } from '@ant-design/icons'
import ModalFormSubmissionTypeRequirement, { useModalFormSubmissionTypeRequirement } from '../component/modal-form-submission-type-requirement.component'
import { observer } from 'mobx-react'
import TableSubmissionTypeRequirementComponent from '../component/table-submission-type-requirement.component'

const SubmissionTypeRequirementPage: FunctionComponent = () => {
  // // use modal form submission type
  const modalFormSubmissionTypeRequirement = useModalFormSubmissionTypeRequirement()

  // // open modal
  const openModalFormSubmissionTypeRequirement = () => modalFormSubmissionTypeRequirement.open()

  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent
        title="Dokumen Kebutuhan Pengajuan"
        extra={[
          <Button key="extra:1" type="primary" icon={<PlusOutlined />} onClick={openModalFormSubmissionTypeRequirement}> Add Dokumen </Button>
        ]}
      />

      <TableSubmissionTypeRequirementComponent />

      {/* MODAL CREATE OR EDIT SUBMISSION TYPE */}
      <ModalFormSubmissionTypeRequirement />
    </PageTransitionComponent>
  )
}

export default memo(observer(SubmissionTypeRequirementPage))
