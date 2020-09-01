import React, { memo, FunctionComponent } from 'react'
import { PageTransitionComponent, HeaderComponent } from 'common/component/index.component'

const VerificationApprovalPage: FunctionComponent = () => {
  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Approval Pengajuan Pembuatan Akun Baru" />

    </PageTransitionComponent>
  )
}

export default memo(VerificationApprovalPage)
