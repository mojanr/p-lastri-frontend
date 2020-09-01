import React, { memo, FunctionComponent } from 'react'
import { PageTransitionComponent, HeaderComponent } from 'common/component/index.component'
import TableProviderComponent from '../component/table-provider.component'

const ProviderPage: FunctionComponent = () => {
  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Penyedia" />

      <TableProviderComponent />
    </PageTransitionComponent>
  )
}

export default memo(ProviderPage)
