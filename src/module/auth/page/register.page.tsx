import React, { memo, FunctionComponent } from 'react'
import AuthComponent from '../component/auth.component'
import { PageTransitionComponent } from 'common/component/index.component'
import RegisterComponent from '../component/register/register.component'

const RegisterPage: FunctionComponent = () => {
  return (
    <AuthComponent>
      <PageTransitionComponent direction="vertical">
        <RegisterComponent />
      </PageTransitionComponent>
    </AuthComponent>
  )
}

export default memo(RegisterPage)
