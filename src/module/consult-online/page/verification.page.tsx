import React, { memo, FunctionComponent } from 'react'
import { PageTransitionComponent, HeaderComponent } from 'common/component/index.component'
import TableVerificationComponent from '../component/table-verification.component'

const VerificationPage: FunctionComponent = () => {
  return (
    <TableVerificationComponent />
  )
}

export default memo(VerificationPage)
