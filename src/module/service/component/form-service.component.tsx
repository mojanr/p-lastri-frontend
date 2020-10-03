import React, { memo, FunctionComponent } from 'react'
import { Form, Button } from 'antd'
import { FieldInputComponent } from 'common/component/index.component'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import { observer } from 'mobx-react'
import { useServiceStore } from 'store/service/_index-service.store'
import { useModalFormService } from './modal-form-service.component'

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

// form service
interface FormService {
  name: string
  description?: string
}

// form service schema
const FormServiceSchema: yup.ObjectSchema<FormService> = yup.object().shape({
  name: yup.string().required().defined(),
  description: yup.string(),
}).defined()


const FormServiceComponent: FunctionComponent = () => {
  // use store
  const { serviceStore } = useServiceStore()

  // use form service modal
  const modalFormService = useModalFormService()

  // use form
  const formServiceContext = useForm<FormService>({
    resolver: yupResolver(FormServiceSchema),
    mode: 'onChange',
  })

  // submit handler
  const onSubmitRole = async (serviceData: FormService) => {
    const result = await serviceStore.createService(serviceData)
    result && modalFormService.close()
  }

  return (
    <FormProvider {...formServiceContext}>
      <Form onSubmitCapture={formServiceContext.handleSubmit(onSubmitRole)} {...layout} layout="horizontal">
        <FieldInputComponent required label="Nama Service" name="name" placeholder="Nama Service" />
        <FieldInputComponent label="Deskripsi Service" name="description" placeholder="Deskripsi Service" />
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

export default memo(observer(FormServiceComponent))
