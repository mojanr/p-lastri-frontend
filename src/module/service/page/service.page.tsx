import React, { memo, FunctionComponent } from 'react'
import { HeaderComponent, PageTransitionComponent } from 'common/component/index.component'
import { Typography, Button } from 'antd'
import TableServiceComponent from '../component/table-service.component'
import { PlusOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react'
import ModalFormServiceComponent, { useModalFormService } from '../component/modal-form-service.component'

const ServicePage: FunctionComponent = () => {
  // use modal form service
  const modalFormService = useModalFormService()

  // open modal
  const openModalFormService = () => modalFormService.open()

  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent
        title="Layanan"
        extra={[
          <Button key="extra:1" type="primary" icon={<PlusOutlined />} onClick={openModalFormService}> Create Service </Button>
        ]}
      />

      {/* TABLE SERVICE */}
      <TableServiceComponent />

      {/* MODAL CREATE OR EDIT USER */}
      <ModalFormServiceComponent />
    </PageTransitionComponent>
  )
}

export default memo(ServicePage)
