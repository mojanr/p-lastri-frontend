import React, { memo, FunctionComponent } from 'react'
import AuthComponent from '../component/auth.component'
import { PageTransitionComponent } from 'common/component/index.component'
import PasswordForgetComponent from '../component/password-forget/password-forget.component'

const PasswordForgetPage: FunctionComponent = () => {
  return (
    <AuthComponent>
      <PageTransitionComponent direction="vertical">
        <PasswordForgetComponent />
      </PageTransitionComponent>
    </AuthComponent>
  )
}

export default memo(PasswordForgetPage)
