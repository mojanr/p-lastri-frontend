import React, { memo, FunctionComponent } from 'react'
import { PageTransitionComponent, HeaderComponent } from 'common/component/index.component'

const VerificationPage: FunctionComponent = () => {
  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Verifikasi Konsultasi Online" />

    </PageTransitionComponent>
  )
}

export default memo(VerificationPage)
