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

const MenuVerifikatorComponent: FunctionComponent = () => {
  // use history 
  const history = useHistory()

  // change menu
  const changeMenu = (path: string) => history.push(path)

  return (
    <motion.div exit="out">
      <Menu mode="inline" >
        {/* <Menu.Item icon={<UserOutlined />} key="user:1" onClick={() => changeMenu('/main/user')}> User </Menu.Item>
        <Menu.Item icon={<TeamOutlined />} key="provider:1" onClick={() => changeMenu('/main/provider')}> Penyedia </Menu.Item>
        <Menu.Item icon={<AppstoreAddOutlined />} key="service:1" onClick={() => changeMenu('/main/service')}> Layanan </Menu.Item> */}
        {/* <SubMenu icon={<SnippetsOutlined />} title="Registrasi dan Verifikasi">
          <Menu.Item key="registrasi:1" onClick={() => changeMenu('/main/account')}> Pembuatan Akun Baru </Menu.Item>
          <Menu.Item key="registrasi:2" onClick={() => changeMenu('/main/change-email')}> Ganti Email </Menu.Item>
          <Menu.Item key="registrasi:3" onClick={() => changeMenu('/main/change-data')}> Ubah Data </Menu.Item>
        </SubMenu>
        <SubMenu icon={<SnippetsOutlined />} title="Konsultasi">
          <Menu.Item key="konsultasi:1" onClick={() => changeMenu('/main/consultation/online')}> Konsultasi Online </Menu.Item>
          <Menu.Item key="konsultasi:2" onClick={() => changeMenu('/main/consultation/ftf')}> Konsultasi Tatap Muka </Menu.Item>
        </SubMenu> */}
        <SubMenu icon={<SnippetsOutlined />} title="Verifikasi Layanan">
          <Menu.Item key="ver-registration:create-account" onClick={() => changeMenu('/main/account/verification')}> Pembuatan Akun Baru </Menu.Item>
          <Menu.Item key="ver-registration:change-email" onClick={() => changeMenu('/main/change-email/verification')}> Ganti Email </Menu.Item>
          <Menu.Item key="ver-registration:change-data" onClick={() => changeMenu('/main/change-data/verification')}> Ubah Data </Menu.Item>
          {/* <Menu.Item key="ver-consultation:online-consult" onClick={() => changeMenu('/main/consultation/online/verification')}> Konsultasi Online </Menu.Item>
          <Menu.Item key="ver-consultation:offline-consult" onClick={() => changeMenu('/main/consultation/ftf/verification')}> Konsultasi Tatap Muka </Menu.Item> */}
        </SubMenu>
      </Menu >
    </motion.div>
  )
}

export default memo(MenuVerifikatorComponent)
