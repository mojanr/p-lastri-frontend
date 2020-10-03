import React, { memo, FunctionComponent } from 'react'
import { HeaderComponent, PageTransitionComponent } from 'common/component/index.component'
import { Button } from 'antd'
import TableRoleComponent from '../component/table-role.component'
import { PlusOutlined } from '@ant-design/icons'
import ModalFormRoleComponent, { useModalFormRole } from '../component/modal-form-role.component'
import { observer } from 'mobx-react'

const RolePage: FunctionComponent = () => {
  // use modal form role
  const modalFormRole = useModalFormRole()

  // open modal
  const openModalFormRole = () => modalFormRole.open()

  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent
        title="Role"
        extra={[
          <Button key="extra:1" type="primary" icon={<PlusOutlined />} onClick={openModalFormRole}> Create Role </Button>
        ]}
      />

      <TableRoleComponent />

      {/* MODAL CREATE OR EDIT ROLE */}
      <ModalFormRoleComponent />
    </PageTransitionComponent>
  )
}

export default memo(observer(RolePage))
