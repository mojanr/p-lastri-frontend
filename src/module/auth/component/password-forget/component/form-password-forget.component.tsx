import React, { memo, FunctionComponent } from 'react'
import { Form, Button, Row, Col } from 'antd'
import { FieldInputComponent, CardComponent, FieldPasswordComponent } from 'common/component/index.component'
import { FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { STYLE } from 'config/style.config'
import { Link, useHistory } from 'react-router-dom'

// form password forget
interface FormPasswordForget {
  email: string
}

// form password forget schema
const FormPasswordForgetSchema: yup.ObjectSchema<FormPasswordForget> = yup.object().shape({
  email: yup.string().required().email().defined(),
}).defined()

const FormPasswordForgetComponent: FunctionComponent = () => {
  // use form
  const formPasswordForgetContext = useForm<FormPasswordForget>({
    resolver: yupResolver(FormPasswordForgetSchema),
    mode: 'onChange'
  })

  // use history
  const history = useHistory()

  // password forget handler
  const onSubmitPasswordForget = (passwordForgetData: FormPasswordForget) => {
    console.log(passwordForgetData)
    // history.push('/main')
  }

  return (
    <FormProvider {...formPasswordForgetContext}>
      <Form onSubmitCapture={formPasswordForgetContext.handleSubmit(onSubmitPasswordForget)}>
        <Form.Item>
          <CardComponent elevation="e300">
            <FieldInputComponent name="email" placeholder="Email" prefix={<MailOutlined style={{ color: STYLE.COLOR.PRIMARY }} />} />
          </CardComponent>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block 
            // disabled={!formLoginContext.formState.isValid}
          > 
            KIRIM 
          </Button>
        </Form.Item>
        {/* <Divider /> */}
        <Form.Item>
          {/* <Row>
            <Col span={12}> <Link to="/auth/register"> Belum punya akun? </Link> </Col>
            <Col span={12} style={{ textAlign: 'right' }}> <Link to="/password/forget"> Lupa password? </Link> </Col>
          </Row>
          <br/> */}
          <Row>
            <Col span={24} style={{ textAlign: 'center' }}> <Link to="/auth/login"> Kembali ke Login </Link> </Col>
          </Row>
        </Form.Item>
      </Form>
    </FormProvider>
  )
}

export default memo(FormPasswordForgetComponent)
