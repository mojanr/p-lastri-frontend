import React, { memo, FunctionComponent } from 'react'
import { Menu as AntMenu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserOutlined, TeamOutlined, SnippetsOutlined, AppstoreAddOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

const { SubMenu } = AntMenu

const Menu = styled(AntMenu)`
  /* height: 60px; */
  border: 0;
`

const MenuHelpdeskComponent: FunctionComponent = () => {
  // use history 
  const history = useHistory()

  // change menu
  const changeMenu = (path: string) => history.push(path)

  return (
    <motion.div exit="out">


      <Menu mode="inline" >
        {/* <Menu.Item key="mail" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu> */}
        <SubMenu icon={<SnippetsOutlined />} title="Verifikasi Layanan">
          <Menu.Item key="ver-registration:create-account" onClick={() => changeMenu('/main/account/verification')}> Pembuatan Akun Baru </Menu.Item>
          <Menu.Item key="ver-registration:change-email" onClick={() => changeMenu('/main/change-email/verification')}> Ganti Email </Menu.Item>
          <Menu.Item key="ver-registration:change-data" onClick={() => changeMenu('/main/change-data/verification')}> Ubah Data </Menu.Item>
          <Menu.Item key="ver-consultation:online-consult" onClick={() => changeMenu('/main/consultation/online/verification')}> Konsultasi Online </Menu.Item>
          <Menu.Item key="ver-consultation:offline-consult" onClick={() => changeMenu('/main/consultation/ftf/verification')}> Konsultasi Tatap Muka </Menu.Item>
        </SubMenu>
      </Menu >
    </motion.div>
  )
}

export default memo(MenuHelpdeskComponent)
