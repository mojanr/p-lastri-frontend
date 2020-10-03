import React, { FunctionComponent, memo } from 'react'
import { Menu } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const TableActionMenuCompnent: FunctionComponent = () => {
  return (
    <Menu>
      <Menu.Item key="0">
        <EditOutlined style={{ color: 'darkorange' }} /> Edit
        </Menu.Item>
      {/* <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item> */}
    </Menu>
  )
}

export default memo(TableActionMenuCompnent)
