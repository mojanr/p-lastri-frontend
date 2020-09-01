import React, { memo, FunctionComponent } from 'react'
import { HeaderComponent, PageTransitionComponent } from 'common/component/index.component'
import { Typography } from 'antd'
import TableServiceComponent from '../component/table-service.component'

const ServicePage: FunctionComponent = () => {
  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Layanan" />

      {/* TABLE SERVICE */}
      <TableServiceComponent />
    </PageTransitionComponent>
  )
}

export default memo(ServicePage)
