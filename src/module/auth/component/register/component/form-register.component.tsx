import React, { memo, FunctionComponent, useState } from 'react'
import { Form, Button, Row, Col, Checkbox, Typography, Popover, Alert, Result } from 'antd'
import { CardComponent, FieldPasswordComponent, FieldInputComponent } from 'common/component/index.component'
import { FormProvider, useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import { LockOutlined, UserOutlined, MailOutlined, CreditCardOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { STYLE } from 'config/style.config'
import { Link } from 'react-router-dom'
import TermsAndConditionsComponent from './terms-and-conditions.component'
import { useStore } from 'store/index.store'
import { observer } from 'mobx-react'
import { useServiceStore } from 'store/service/_index-service.store'

// 
interface Submit {
  loading?: boolean
  statusCode?: Number
  message?: string
}

// form register
interface FormRegister {
  name: string
  npwp: string
  email: string
  password: string
  confirmPassword: string
  isAgree: boolean
}

// default value
const FormRegisterDefaultValue: FormRegister = {
  name: '',
  npwp: '',
  email: '',
  password: '',
  confirmPassword: '',
  isAgree: false,
}

// form register schema
const FormRegisterSchema: yup.ObjectSchema<FormRegister> = yup.object().shape({
  name: yup.string().trim().required().defined(),
  npwp: yup.string().trim().required().matches(/^[0-9]+$/, 'Must be a number').min(15).max(15).defined(),
  email: yup.string().trim().required().email().defined(),
  password: yup.string().trim().required().defined(),
  confirmPassword: yup.string().trim().required().oneOf([yup.ref('password')], 'Password do not match').defined(),
  isAgree: yup.boolean().required().oneOf([true]).defined()
}).defined()

const FormRegisterComponent: FunctionComponent = () => {
  // use store
  const { providerStore } = useServiceStore()

  const [isSubmit, setSubmit] = useState<Submit>({
    loading: false,
    statusCode: 0,
    message: ''
  })

  // use form
  const formRegisterContext = useForm<FormRegister>({
    resolver: yupResolver(FormRegisterSchema),
    mode: 'onChange',
    defaultValues: FormRegisterDefaultValue
  })

  // register handler
  const onSubmitRegister = async (registerData: FormRegister) => {
    setSubmit({ loading: true })
    const result = await providerStore.registerProvider(registerData)
    if (result) {
      formRegisterContext.reset(FormRegisterDefaultValue)
      setSubmit({ loading: false, statusCode: 201, message: 'Register success, silahkan lakukan login' })
    } else {
      setSubmit({ loading: false, statusCode: 500, message: 'Register gagal' })
    }
  }

  return (
    <FormProvider {...formRegisterContext}>
      <Form onSubmitCapture={formRegisterContext.handleSubmit(onSubmitRegister)}>
        <Form.Item>
          <CardComponent elevation="e300">
            <FieldInputComponent name="name" placeholder="Nama Perusahaan" prefix={<UserOutlined style={{ color: STYLE.COLOR.PRIMARY }} />} />
            <FieldInputComponent name="npwp" placeholder="NPWP Perusahaan" prefix={<CreditCardOutlined style={{ color: STYLE.COLOR.PRIMARY }} />} />
            <FieldInputComponent name="email" placeholder="Email" prefix={<MailOutlined style={{ color: STYLE.COLOR.PRIMARY }} />} />
            <FieldPasswordComponent name="password" placeholder="New Password" prefix={<LockOutlined style={{ color: STYLE.COLOR.PRIMARY }} />} onChange={() => console.log('test')} />
            <FieldPasswordComponent name="confirmPassword" placeholder="Confirm New Password" prefix={<LockOutlined style={{ color: STYLE.COLOR.PRIMARY }} />} />
            <Form.Item
              validateStatus={formRegisterContext.errors?.isAgree?.message && 'error'}
              help={formRegisterContext.errors?.isAgree?.message}
            >
              <Controller
                name="isAgree"
                control={formRegisterContext.control}
                render={({ onChange, onBlur, value }) => (
                  <Popover content={<TermsAndConditionsComponent />} title="Syarat dan Ketentuan" trigger="hover" style={{ textAlign: 'left' }}>
                    <Checkbox onChange={e => { onChange(e.target.checked) }} checked={value}> <Typography.Text strong > Saya setuju dengan persyaratan yang berlaku </Typography.Text> <QuestionCircleOutlined /> </Checkbox>
                  </Popover>
                )}
              />
            </Form.Item>
          </CardComponent>
        </Form.Item>

        {/* show alert register */}
        {isSubmit?.statusCode === 201 && (
          <Form.Item>
            <Alert type="success" message={<Typography.Text strong > {isSubmit?.message} </Typography.Text>} />
          </Form.Item>
        )}
        {isSubmit?.statusCode == 500 && (
          <Form.Item>
            <Alert type="error" message={<Typography.Text strong > {isSubmit?.message} </Typography.Text>} />
          </Form.Item>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={isSubmit.loading}>
            REGISTER
          </Button>
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={24} style={{ textAlign: 'center' }}> <Link to="/auth/login"> Sudah punya akun? </Link> </Col>
            {/* <Col span={12} style={{ textAlign: 'right' }}>  <Link to="/password/forget"> Lupa Password? </Link> </Col> */}
          </Row>
        </Form.Item>
      </Form>
    </FormProvider>
  )
}

export default memo(observer(FormRegisterComponent))
