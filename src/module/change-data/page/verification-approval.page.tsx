import React, { memo, FunctionComponent } from 'react'
import { PageTransitionComponent, HeaderComponent } from 'common/component/index.component'

const VerificationApprovalPage: FunctionComponent = () => {
  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Approval Pengajuan Ubah Data" />

    </PageTransitionComponent>
  )
}

export default memo(VerificationApprovalPage)
