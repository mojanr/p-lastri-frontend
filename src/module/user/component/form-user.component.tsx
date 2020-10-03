import React, { memo, FunctionComponent, useEffect } from 'react'
import { Form, Button, Row, Col, Checkbox, Typography, Popover, Select, Input } from 'antd'
import { CardComponent, FieldPasswordComponent, FieldInputComponent } from 'common/component/index.component'
import { FormProvider, useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import { LockOutlined, UserOutlined, MailOutlined, CreditCardOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { STYLE } from 'config/style.config'
import { Link } from 'react-router-dom'
import { useServiceStore } from 'store/service/_index-service.store'
import { useModalFormUser } from './modal-form-user.component'
import { observer } from 'mobx-react'

// form layout
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 24
  },
};

// form user
interface FormUser {
  name: string
  email: string
  roleId: string
  password: string
  confirmPassword: string
}

// form user schema
const FormUserSchema: yup.ObjectSchema<FormUser> = yup.object().shape({
  name: yup.string().required().defined(),
  email: yup.string().required().email().defined(),
  roleId: yup.string().required().defined(),
  password: yup.string().required().defined(),
  confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Password do not match').defined(),
}).defined()


const FormUserComponent: FunctionComponent = () => {
  // use store
  const { userStore, roleStore } = useServiceStore()

  // use form service modal
  const modalFormUser = useModalFormUser()

  // use form
  const formUserContext = useForm<FormUser>({
    resolver: yupResolver(FormUserSchema),
    mode: 'onChange',
  })

  // submit handler
  const onSubmitUser = async (userData: FormUser) => {
    const result = await userStore.createUser(userData)
    result && modalFormUser.close()
  }

  // use effect
  useEffect(() => {
    roleStore.fetchRoles()
  }, [])

  return (
    <FormProvider {...formUserContext}>
      <Form onSubmitCapture={formUserContext.handleSubmit(onSubmitUser)} {...layout} layout="horizontal">
        {/* <Form.Item> */}
        {/* <CardComponent elevation="e300"> */}
        <FieldInputComponent required label="Nama" name="name" placeholder="Nama" />
        {/* <FieldInputComponent name="role" placeholder="Role"/> */}
        <Form.Item
          required
          label={<Typography.Text strong> Role </Typography.Text>}
          validateStatus={formUserContext.errors.roleId?.message && 'error'}
          help={formUserContext.errors.roleId?.message}
        >
          <Controller
            as={
              <Select showSearch placeholder="Role">
                {/* <Select.Option value="Admin"> Admin </Select.Option>
                <Select.Option value="Verifikator"> Verifikator </Select.Option>
                <Select.Option value="Helpdesk"> Helpdesk </Select.Option> */}
                {roleStore.getRoles.map((item: any, index) => (
                  <Select.Option value={item.id}> {item.name} </Select.Option>
                ))}
              </Select>
            }
            control={formUserContext.control}
            name="roleId"
          // defaultValue="Admin"
          />
        </Form.Item>

        <FieldInputComponent required label="Email" name="email" placeholder="Email" />
        <FieldPasswordComponent required label="Password" name="password" placeholder="New Password" />
        <FieldPasswordComponent required label="Confirm Password" name="confirmPassword" placeholder="Confirm New Password" />
        {/* </CardComponent> */}
        {/* </Form.Item> */}
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

export default memo(observer(FormUserComponent))
