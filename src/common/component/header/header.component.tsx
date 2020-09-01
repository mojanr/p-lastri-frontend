import React, { memo, FunctionComponent, ReactNode } from 'react'
import { PageHeaderProps } from 'antd/lib/page-header'
import styled from 'styled-components'
import { PageHeader as AntPageHeader } from 'antd'
import { DividerComponent } from '../index.component'

interface HeaderComponentProps extends PageHeaderProps {
  children?: string | ReactNode
}

const PageHeader = styled(AntPageHeader)`
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
`

const HeaderComponent: FunctionComponent<HeaderComponentProps> = (props) => {
  return (
    <PageHeader {...props} ghost={ props.ghost || true }>
      <DividerComponent style={{ marginBottom: props.children ? 16 : 0 }} />
      {props.children}
    </PageHeader>
  )
}

export default memo(HeaderComponent)
