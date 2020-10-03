import React, { FunctionComponent, memo } from 'react'
import { EditOutlined, EllipsisOutlined, EyeOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'

const TableActionComponent: FunctionComponent = () => {

  // action menu
  const ActionMenu = (
    <Menu>
      <Menu.Item key="0">
        <EditOutlined style={{ color: 'darkorange' }} /> Edit
      </Menu.Item>
      {/* <Menu.Item key="1">
        <EyeOutlined style={{ color: 'blue' }} /> Detail
      </Menu.Item> */}
      {/* <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item> */}
    </Menu>
  )

  return (
    <Dropdown overlay={ActionMenu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <EllipsisOutlined style={{ fontSize: 24 }} />
      </a>
    </Dropdown>
  )
}

export default memo(TableActionComponent)