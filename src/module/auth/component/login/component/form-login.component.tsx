import React, { memo, FunctionComponent, useState } from 'react'
import { Form, Button, Row, Col, Alert, Typography } from 'antd'
import { FieldInputComponent, CardComponent, FieldPasswordComponent } from 'common/component/index.component'
import { FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { STYLE } from 'config/style.config'
import { Link, useHistory } from 'react-router-dom'
import { useStore } from 'store/index.store'

// 
interface Submit {
  loading?: boolean
  statusCode?: Number
  message?: string
}

// form login
interface FormLogin {
  email: string
  password: string
}

// form login schema
const FormLoginSchema: yup.ObjectSchema<FormLogin> = yup.object().shape({
  email: yup.string().required().email().defined(),
  password: yup.string().required().defined()
}).defined()

const FormLoginComponent: FunctionComponent = () => {
  // use store
  const { serviceStore } = useStore()
  const [isSubmit, setSubmit] = useState<Submit>()

  // use form
  const formLoginContext = useForm<FormLogin>({
    resolver: yupResolver(FormLoginSchema),
    mode: 'onChange'
  })

  // use history
  const history = useHistory()

  // login handler
  const onSubmitLogin = async (loginData: FormLogin) => {
    try {
      // console.log(loginData)
      setSubmit({ loading: true })
      const result = await serviceStore.authStore.login(loginData)
      setSubmit({ loading: false })
      history.push('/main/dashboard')
      // history.push('/main')
    } catch (error) {
      if (!error.response) {
        setSubmit({ loading: false, statusCode: 500, message: 'Suddenly our server is currently down' })
      }
    }
  }

  return (
    <FormProvider {...formLoginContext}>
      <Form onSubmitCapture={formLoginContext.handleSubmit(onSubmitLogin)}>
        <Form.Item>
          <CardComponent elevation="e300">
            <FieldInputComponent name="email" placeholder="Email" prefix={<MailOutlined style={{ color: STYLE.COLOR.PRIMARY }} />} />
            <FieldPasswordComponent type="password" name="password" placeholder="Password" prefix={<LockOutlined style={{ color: STYLE.COLOR.PRIMARY }} />} />
          </CardComponent>
        </Form.Item>

        {isSubmit?.statusCode === 500 && (
          <Form.Item>
            <Alert type="error" message={<Typography.Text strong > {isSubmit.message} </Typography.Text>} />
          </Form.Item>
        )}
        
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={isSubmit?.loading}
          // disabled={!formLoginContext.formState.isValid}
          >
            LOGIN
          </Button>
        </Form.Item>
        {/* <Divider /> */}
        <Form.Item>
          <Row>
            <Col span={12}> <Link to="/auth/register"> Belum punya akun? </Link> </Col>
            <Col span={12} style={{ textAlign: 'right' }}> <Link to="/auth/password/forget"> Lupa password? </Link> </Col>
          </Row>
          <br />
          <Row>
            <Col span={24} style={{ textAlign: 'center' }}> <Link to="/"> Kembali ke Home </Link> </Col>
          </Row>
        </Form.Item>
      </Form>
    </FormProvider>
  )
}

export default memo(FormLoginComponent)
