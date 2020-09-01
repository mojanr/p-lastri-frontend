import React, { memo, FunctionComponent } from 'react'
import { HeaderComponent, PageTransitionComponent } from 'common/component/index.component'
import { Button } from 'antd'
import TableUserComponent from '../component/table-user.component'
import { PlusOutlined } from '@ant-design/icons'
import ModalFormUserComponent, { useModalFormUser } from '../component/modal-form-user.component'
import { observer } from 'mobx-react'

const UserPage: FunctionComponent = () => {
  // use modal form user
  const modalFormUser = useModalFormUser()

  // open modal
  const openModalFormUser = () => modalFormUser.open()

  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent
        title="User"
        extra={[
          <Button key="extra:1" type="primary" icon={<PlusOutlined />} onClick={openModalFormUser}> Create User </Button>
        ]}
      />

      <TableUserComponent />

      {/* MODAL CREATE OR EDIT USER */}
      <ModalFormUserComponent />
    </PageTransitionComponent>
  )
}

export default memo(observer(UserPage))
