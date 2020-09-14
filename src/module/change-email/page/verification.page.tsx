import React, { memo, FunctionComponent } from 'react'
import { PageTransitionComponent, HeaderComponent, CardComponent } from 'common/component/index.component'
import TableVerificationComponent from '../component/table-verification.component'

const VerificationPage: FunctionComponent = () => {
  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Verifikasi Pengajuan Ganti Email" />

      <CardComponent elevation="e300">
        <TableVerificationComponent />
      </CardComponent>
    </PageTransitionComponent>
  )
}

export default memo(VerificationPage)
