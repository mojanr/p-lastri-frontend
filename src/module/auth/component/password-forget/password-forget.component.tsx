import React, { memo, FunctionComponent } from 'react'
import { HeaderComponent } from 'common/component/index.component'
import { Typography } from 'antd'
import FormPasswordForgetComponent from './component/form-password-forget.component'

const LoginComponent: FunctionComponent = () => {
  return (
    <>
      <HeaderComponent title="Lupa Password">
        <Typography.Text strong > Kirim email anda untuk jika lupa password </Typography.Text>
      </HeaderComponent>
      
      <FormPasswordForgetComponent />
    </>
  )
}

export default memo(LoginComponent)
