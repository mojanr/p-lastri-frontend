import React, { memo, FunctionComponent, useState, useEffect } from 'react'
import { Menu as AntMenu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined, UserOutlined, TeamOutlined, SnippetsOutlined, AppstoreAddOutlined, ApartmentOutlined, AuditOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react'
import { useServiceStore } from 'store/service/_index-service.store'

const { SubMenu } = AntMenu

const Menu = styled(AntMenu)`
  /* height: 60px; */
  border: 0;
`

const MenuVerifikatorComponent: FunctionComponent = () => {
   // use state
  // const [submissionType, setSubmissionType] = useState([])

  // use history 
  const history = useHistory()

  // use service store
  const { submissionStore } = useServiceStore()

  // change menu
  const changeMenu = (path: string) => history.push(path)

  // set submission type menu
  const setSubmissionTypeMenu = (typeName: string, path: string) => {
    submissionStore.setActiveSubmissionMenu(typeName)
    changeMenu(path)
  }

  // use effect
  useEffect(() => {
    submissionStore.fetchSubmissionTypes()
  }, [])

  // // ini submission type menu
  // const initSubmissionTypeMenu = async () => {
  //   const result
  // }

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
        <SubMenu icon={<SnippetsOutlined />} title="Approval Registrasi dan Verifikasi">
          {/* <Menu.Item key="registrasi:1" onClick={() => changeMenu('/main/account')}> Pembuatan Akun Baru </Menu.Item>
          <Menu.Item key="registrasi:2" onClick={() => changeMenu('/main/change-email')}> Ganti Email </Menu.Item>
          <Menu.Item key="registrasi:3" onClick={() => changeMenu('/main/change-data')}> Ubah Data </Menu.Item> */}
          {submissionStore.getSubmissionTypes.map((item: any, index) => (
            <Menu.Item key={`verifikasiregistrasi:${index}`} onClick={() => setSubmissionTypeMenu(item.name, `/main/submission/verification/${item?.id}`)}> {item?.name}</Menu.Item>
          ))}
        </SubMenu>
        {/* <SubMenu icon={<SnippetsOutlined />} title="Konsultasi">
          <Menu.Item key="konsultasi:1" onClick={() => changeMenu('/main/consultation/online')}> Konsultasi Online </Menu.Item>
          <Menu.Item key="konsultasi:2" onClick={() => changeMenu('/main/consultation/ftf')}> Konsultasi Tatap Muka </Menu.Item>
        </SubMenu>
        <SubMenu icon={<SnippetsOutlined />} title="Approval Konsultasi">
          <Menu.Item key="konsultasi:1" onClick={() => changeMenu('/main/consultation/online')}> Konsultasi Online </Menu.Item>
          <Menu.Item key="konsultasi:2" onClick={() => changeMenu('/main/consultation/ftf')}> Konsultasi Tatap Muka </Menu.Item>
        </SubMenu> */}
        {/* <SubMenu icon={<SnippetsOutlined />} title="Verifikasi Layanan">
          <Menu.Item key="verregistrasi:1" onClick={() => changeMenu('/main/account/verification')}> Pembuatan Akun Baru </Menu.Item>
          <Menu.Item key="verregistrasi:2" onClick={() => changeMenu('/main/change-email/verification')}> Ganti Email </Menu.Item>
          <Menu.Item key="verregistrasi:3" onClick={() => changeMenu('/main/change-data/verification')}> Ubah Data </Menu.Item>
          <Menu.Item key="verkonsultasi:1" onClick={() => changeMenu('/main/consultation/online/verification')}> Konsultasi Online </Menu.Item>
          <Menu.Item key="verkonsultasi:2" onClick={() => changeMenu('/main/consultation/ftf/verification')}> Konsultasi Tatap Muka </Menu.Item>
        </SubMenu> */}
      </Menu >
    </motion.div>
  )
}

export default memo(observer(MenuVerifikatorComponent))
