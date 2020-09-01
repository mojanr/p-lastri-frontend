import React, { memo, FunctionComponent } from 'react'
import AuthComponent from '../component/auth.component'
import LoginComponent from '../component/login/login.component'
import { PageTransitionComponent } from 'common/component/index.component'

const LoginPage: FunctionComponent = () => {
  return (
    <AuthComponent>
      <PageTransitionComponent direction="vertical">
        <LoginComponent />
      </PageTransitionComponent>
    </AuthComponent>
  )
}

export default memo(LoginPage)
