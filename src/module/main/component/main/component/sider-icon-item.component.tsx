import React, { memo, FunctionComponent, ReactNode } from 'react'
import { Tooltip, Button } from 'antd'

interface SiderIconItemComponentProps {
  tooltip?: string
  icon: ReactNode
  onClick?: () => void
}

export interface SiderIconItem extends SiderIconItemComponentProps { }

const SiderIconItemComponent: FunctionComponent<SiderIconItemComponentProps> = ({
  tooltip,
  icon,
  onClick
}) => {
  return (
    <Tooltip title={tooltip} placement="right">
      <Button type="primary" icon={icon} onClick={onClick} />
    </Tooltip>
  )
}

export default memo(SiderIconItemComponent)
