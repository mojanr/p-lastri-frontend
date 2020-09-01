import React, { memo, FunctionComponent } from 'react'
import SiderIconItemComponent, { SiderIconItem } from './sider-icon-item.component'
import { AntDesignOutlined, LogoutOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Space } from 'antd'

const SiderIconComponent: FunctionComponent = () => {
  // use history
  const history = useHistory()

  const SiderIconItems: SiderIconItem[] = [
    {
      icon: <AntDesignOutlined />
    },
    {
      tooltip: 'Logout',
      icon: <LogoutOutlined />,
      onClick: () => history.push('/')
    },
  ]

  return (
    <Space direction="vertical" size={10}>
      {SiderIconItems.map((item, index) => <SiderIconItemComponent key={index} tooltip={item.tooltip} icon={item.icon} onClick={item.onClick} />)}
    </Space>
  )
}

export default memo(SiderIconComponent)
