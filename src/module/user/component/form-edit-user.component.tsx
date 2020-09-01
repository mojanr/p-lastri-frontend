import React, { memo, FunctionComponent } from 'react'
import { Form, Button, Row, Col, Checkbox, Typography, Popover, Select } from 'antd'
import { CardComponent, FieldPasswordComponent, FieldInputComponent } from 'common/component/index.component'
import { FormProvider, useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import { LockOutlined, UserOutlined, MailOutlined, CreditCardOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { STYLE } from 'config/style.config'
import { Link } from 'react-router-dom'

// form user
interface FormUser {
  nama: string
  email: string
  role: string
  // password: string
  // confirmPassword: string
}

// form user schema
const FormUserSchema: yup.ObjectSchema<FormUser> = yup.object().shape({
  nama: yup.string().required().defined(),
  email: yup.string().required().email().defined(),
  role: yup.string().required().defined(),
  // password: yup.string().required().defined(),
  // confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Password do not match').defined(),
}).defined()


const FormEditUserComponent: FunctionComponent = () => {
  // use form
  const formUserContext = useForm<FormUser>({
    resolver: yupResolver(FormUserSchema),
    mode: 'onChange',
  })

  // register handler
  const onSubmitUser = (userData: FormUser) => {
    console.log(userData)
  }

  return (
    <FormProvider {...formUserContext}>
      <Form onSubmitCapture={formUserContext.handleSubmit(onSubmitUser)} layout="vertical">
        <Form.Item>
          {/* <CardComponent elevation="e300"> */}
          <FieldInputComponent label="Nama" name="nama" placeholder="Nama" />
          {/* <FieldInputComponent name="role" placeholder="Role"/> */}
          <Form.Item
             label={<Typography.Text strong> Role </Typography.Text>}
             validateStatus={formUserContext.errors.role?.message && 'error'}
             help={formUserContext.errors.role?.message}
          >
            <Controller
              as={
                <Select showSearch placeholder="Role">
                  <Select.Option value="Admin"> Admin </Select.Option>
                  <Select.Option value="Verifikator"> Verifikator </Select.Option>
                  <Select.Option value="Helpdesk"> Helpdesk </Select.Option>
                </Select>
              }
              control={formUserContext.control}
              name="role"
              // defaultValue="Admin"
            />
          </Form.Item>

          <FieldInputComponent label="Email" name="email" placeholder="Email" />
          <FieldPasswordComponent label="Password" name="password" placeholder="New Password" />
          <FieldPasswordComponent label="Confirm Password" name="confirmPassword" placeholder="Confirm New Password" />
          {/* </CardComponent> */}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block
          // disabled={!formRegisterContext.formState.isValid}
          >
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </FormProvider>
  )
}

export default memo(FormEditUserComponent)
