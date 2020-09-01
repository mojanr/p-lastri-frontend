import React, { memo, FunctionComponent } from 'react'
import { Layout as AntLayout, Typography, Row, Col, Space, Card, Divider, Form, Button, Tooltip } from 'antd'
import styled from 'styled-components'
import MenuComponent from '../component/main/component/menu.component'
import ButtonLoginComponent from '../component/main/component/button-login.component'
import ButtonRegisterComponent from '../component/main/component/button-register.component'
import { HeaderComponent, CardComponent, PageTransitionComponent } from 'common/component/index.component'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'
import { STYLE } from 'config/index.config'
import { LogoutOutlined } from '@ant-design/icons'
import SiderIconComponent from '../component/main/component/sider-icon.component'
import { motion } from 'framer-motion'

const { Sider: AntSider, Header: AntHeader, Content: AntContent, Footer: AntFooter } = AntLayout

const SiderWidth = 250
const SiderIconWidth = 50

// const Sider = styled(AntSider)`
//   overflow: auto;
//   /* width: ${SiderWidth}px; */
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   /* background: #edf1f5; */
//   background: white;
//   padding: 8px 24px 24px 24px;
// `

// const Header = styled(AntHeader)`
//   width: 100%;
//   /* height: 50px; */
//   /* position: fixed; */
//   /* top: 0; */
//   /* left: 0; */
//   background: #edf1f5;
//   padding: 0 24px;
//   /* margin-left: ${SiderWidth}px; */
//   /* box-shadow: rgba(9, 30, 66, 0.25) 0px 8px 16px -4px, rgba(9, 30, 66, 0.31) 0px 0px 1px; */
// `

const Content = styled(AntContent)`
  /* margin-top: 65px; */
  padding: 24px 50px;
`
// const Content = styled(AntContent)`
//   padding: 8px 24px 24px 24px;
//   /* margin-top: 65px; */
// `

// const Footer = styled(AntFooter)`
//   text-align: center;
// `

const SiderIcon = styled(AntSider)`
  overflow: auto;
  /* width: ${SiderIconWidth}px; */
  height: 100vh;
  background-color: ${STYLE.COLOR.PRIMARY};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SiderMenu = styled(AntSider)`
  height: 100vh;
  padding: 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 14px;
  position: absolute;
  top: 0;
  bottom: 0;
`

const SiderMenuAnimationVariants = {
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

const MainPage: FunctionComponent<RouteConfigComponentProps> = (props) => {
  return (
    // <AntLayout>
    //   <Sider width={SiderWidth}>
    //     <HeaderComponent title="Layanan Registrasi, Verifikasi, dan Konsultasi Pelaku Usaha" />
    //     <MenuComponent />
    //   </Sider>
    //   <AntLayout
    //     style={{ marginLeft: SiderWidth }}
    //   >
    //     <Header>
    //       <Row>
    //         <Col span={12}>
    //           <Typography.Text strong> PT Kereta Api Indonesia Persero Test Test </Typography.Text>
    //           <Divider type="vertical" style={{ borderColor: STYLE.COLOR.PRIMARY }} />
    //           <Typography.Text> 10.10.10.10.10.I.10 </Typography.Text>
    //         </Col>
    //         <Col span={12} style={{ textAlign: "right" }}>
    //           <Tooltip title="Logout" placement="bottomLeft">
    //             <Button shape="circle-outline" icon={<LogoutOutlined />} type="default" />
    //           </Tooltip>
    //         </Col>
    //       </Row>
    //     </Header>
    //     <Content>
    //       {renderRoutes(props.route?.routes)}
    //     </Content>
    //   </AntLayout>
    // </AntLayout>
    // <AntLayout>
    //   <Header>
    //     <Row>
    //       <Col span={12}>
    //         <MenuComponent />
    //       </Col>
    //       <Col span={12} style={{ textAlign: "right" }}>
    //         <Space direction="horizontal" size={15}>
    //           <ButtonLoginComponent />
    //           <ButtonRegisterComponent />
    //         </Space>
    //       </Col>
    //     </Row>
    //   </Header>
    //   <Content>Content</Content>
    //   <Footer>
    //     <Typography.Text strong> Layanan Registrasi, Verifikasi, dan Konsultasi Pelaku Usaha </Typography.Text>
    //   </Footer>
    // </AntLayout>
    <AntLayout>
      <SiderIcon width={SiderIconWidth}>
        <SiderIconComponent />
      </SiderIcon>
      <AntLayout style={{ marginLeft: SiderIconWidth }}>
        <AntContent>
          <AntLayout>
            <SiderMenu width={SiderWidth}>
              <motion.div
                variants={SiderMenuAnimationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div>
                  <Card style={{ backgroundColor: STYLE.COLOR.GRAY }} bodyStyle={{ padding: 15 }} hoverable>
                    <Typography.Text strong> PT NAMA PERUSAHAAN </Typography.Text>
                    {/* <Divider type="vertical" style={{ borderColor: STYLE.COLOR.PRIMARY }} /> */}
                    <Typography.Text> 10.10.10.10.10.I.10 </Typography.Text>
                  </Card>
                  <MenuComponent />
                </div>
              </motion.div>

            </SiderMenu>
            <AntLayout style={{ marginLeft: SiderWidth }}>
              <Content>
                {renderRoutes(props.route?.routes)}
              </Content>
            </AntLayout>
          </AntLayout>
        </AntContent>
      </AntLayout>
    </AntLayout>
  )
}

export default memo(MainPage)
