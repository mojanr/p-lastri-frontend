import React, { memo, FunctionComponent } from 'react'
import { Form, Button } from 'antd'
import { FieldInputComponent } from 'common/component/index.component'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import { useServiceStore } from 'store/service/_index-service.store'
import { observer } from 'mobx-react'
import { useModalFormRole } from './modal-form-role.component'

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

// form role
interface FormRole {
  name: string
  description?: string
}

// form role schema
const FormRoleSchema: yup.ObjectSchema<FormRole> = yup.object().shape({
  name: yup.string().required().defined(),
  description: yup.string(),
}).defined()


const FormRoleComponent: FunctionComponent = () => {
  // use service store
  const { roleStore } = useServiceStore()

  // use form role modal
  const modalFormRole = useModalFormRole()

  // use form
  const formRoleContext = useForm<FormRole>({
    resolver: yupResolver(FormRoleSchema),
    mode: 'onChange',
  })

  // submit handler
  const onSubmitRole = async (roleData: FormRole) => {
    const result = await roleStore.createRole(roleData)
    result && modalFormRole.close()
  }

  return (
    <FormProvider {...formRoleContext}>
      <Form onSubmitCapture={formRoleContext.handleSubmit(onSubmitRole)} {...layout} layout="horizontal">
        <FieldInputComponent required label="Nama Role" name="name" placeholder="Nama Role" />
        <FieldInputComponent label="Deskripsi Role" name="description" placeholder="Deskripsi Role" />
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

export default memo(observer(FormRoleComponent))
