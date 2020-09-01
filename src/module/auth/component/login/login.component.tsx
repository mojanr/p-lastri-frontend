import React, { memo, FunctionComponent } from 'react'
import { HeaderComponent } from 'common/component/index.component'
import { Typography } from 'antd'
import FormLoginComponent from './component/form-login.component'

const LoginComponent: FunctionComponent = () => {
  return (
    <>
      <HeaderComponent title="Layanan Registrasi, Verifikasi, dan Konsultasi Pelaku Usaha">
        <Typography.Text strong > Lakukan login dengan email dan password untuk dapat menggunakan aplikasi </Typography.Text>
      </HeaderComponent>
      
      <FormLoginComponent />
    </>
  )
}

export default memo(LoginComponent)
