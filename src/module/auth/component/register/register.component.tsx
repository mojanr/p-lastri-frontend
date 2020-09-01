import React, { memo, FunctionComponent } from 'react'
import { HeaderComponent } from 'common/component/index.component'
import { Typography, Form, Alert } from 'antd'
import FormRegisterComponent from './component/form-register.component'

const RegisterComponent: FunctionComponent = () => {
  return (
    <>
      <HeaderComponent title="Pendaftaran Penyedia">
        <Typography.Text strong > Lakukan pendaftaran jika belum mempunyai akun </Typography.Text>
      </HeaderComponent>

      <Form.Item>
        <Alert type="info" message={<Typography.Text strong >Pastikan data yang didaftarkan adalah data yang sama dengan akun LPSE</Typography.Text>} />
      </Form.Item>

      <FormRegisterComponent />
    </>
  )
}

export default memo(RegisterComponent)
