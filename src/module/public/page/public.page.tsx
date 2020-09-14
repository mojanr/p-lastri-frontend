import React, { memo, FunctionComponent } from 'react'
import { Layout as AntLayout, Typography, Button, Grid, Row, Col, Menu, Form, Space } from 'antd'
import styled from 'styled-components'
import { HeaderComponent, CardComponent, DividerComponent, FieldInputComponent } from 'common/component/index.component'
import { STYLE } from 'config/index.config'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const { Sider: AntSider, Header: AntHeader, Content: AntContent, Footer: AntFooter } = AntLayout

const { SubMenu } = Menu

const SiderWidth = 300

const Sider = styled(AntSider)`
  position: fixed;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 14px;
  padding: 50px;
  /* display: grid; */
  /* grid-template-columns: 300px 1fr; */
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: 1fr repeat(4, auto) 1fr; */
`

const SiderContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  height: 100%;
`

const Header = styled(AntHeader)`
  background: transparent;
  /* position: absolute; */
`

const Content = styled(AntContent)`
  padding: 24px 70px;
`

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
`

const Footer = styled(AntFooter)`
  padding: 0 70px;
  text-align: left;
`

const SiderAnimationVariants = {
  hidden: {
    x: -24,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      easings: "easeInOut",
      duration: 0.3
    }
  },
  exit: {
    x: -24,
    opacity: 0,
    transition: {
      easings: "easeInOut",
      duration: 0.1
    }
  }
}

const PublicPage: FunctionComponent = () => {
  return (
    <>
      <AntLayout>
        <Sider theme="light" width={SiderWidth}>
          <SiderContainer>
            <motion.div
              variants={SiderAnimationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div>
                <HeaderComponent title={<Typography.Title level={1}> Digital Revisi </Typography.Title>} />
                <HeaderComponent title="Layanan Registrasi, Verifikasi, dan Konsultasi Pelaku Usaha" />
                <Row gutter={12}>
                  <Col span={12}><Link to="/auth/register">  <Button type="primary" block> Register </Button> </Link> </Col>
                  <Col span={12}><Link to="/auth/login"> <Button type="default" block> Login </Button> </Link> </Col>
                </Row>
              </div>
            </motion.div>
          </SiderContainer>
        </Sider>
        <AntLayout style={{ marginLeft: SiderWidth }}>
          {/* <Header>
            <Menu mode="horizontal" style={{ background: "transparent" }}>
              <Menu.Item key="mail">
                Navigation One
              </Menu.Item>
              <Menu.Item key="app" disabled>
                Navigation Two
              </Menu.Item>
              <SubMenu title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </Menu.Item>
            </Menu>
          </Header> */}
          <Content>
            {/* <HeaderComponent title="Layanan Registrasi, Verifikasi, dan Konsultasi Pelaku Usaha" /> */}

            {/* <div>
              <HeaderComponent title={<Typography.Title level={1}> Digital Revisi </Typography.Title>} />
              <HeaderComponent title="Layanan Registrasi, Verifikasi, dan Konsultasi Pelaku Usaha" />
              <Row gutter={12}>
                <Col span={12}><Link to="/auth/register">  <Button type="primary" block> Register </Button> </Link> </Col>
                <Col span={12}><Link to="/auth/login"> <Button type="default" block> Login </Button> </Link> </Col>
              </Row>
            </div> */}

            {/* <ContentContainer>
              <CardComponent elevation="e300" style={{ background: STYLE.COLOR.PRIMARY, color: 'white' }}>
                <Space direction="vertical" size={15}>
                  <Typography.Text strong style={{ color: "white", fontSize: 16 }} > Pendaftar <br/> Hari Ini </Typography.Text>
                  <DividerComponent color="white" />
                </Space>
              </CardComponent>

              <CardComponent elevation="e300" style={{ background: STYLE.COLOR.PRIMARY, color: 'white' }}>
                <Space direction="vertical" size={15}>
                  <Typography.Text strong style={{ color: "white", fontSize: 16 }} > Pendaftar <br/> Sudah Diverifikasi </Typography.Text>
                  <DividerComponent color="white" />
                </Space>
              </CardComponent>


              <CardComponent elevation="e300" style={{ background: STYLE.COLOR.PRIMARY, color: 'white' }}>
                <Space direction="vertical" size={15}>
                  <Typography.Text strong style={{ color: "white", fontSize: 16 }} > Pengajuan Hari Ini </Typography.Text>
                  <DividerComponent color="white" />
                </Space>
              </CardComponent>

              <CardComponent elevation="e300" style={{ background: STYLE.COLOR.PRIMARY, color: 'white' }}>
                <Space direction="vertical" size={15}>
                  <Typography.Text strong style={{ color: "white", fontSize: 16 }} > Pengajuan Hari Ini </Typography.Text>
                  <DividerComponent color="white" />
                </Space>
              </CardComponent>
            </ContentContainer> */}

            {/* <CardComponent elevation="e300">
              <Form>
                <FieldInputComponent name="Test" />
              </Form>
            </CardComponent> */}
          </Content>
          {/* <Footer>
            <Typography.Text strong > Layanan Registrasi, Verifikasi, dan Konsultasi Pelaku Usaha </Typography.Text>
            <br></br>
            <Typography.Text strong > (Digital Revisi) </Typography.Text>
          </Footer> */}
        </AntLayout>
      </AntLayout>
    </>
  )
}

export default memo(PublicPage)
