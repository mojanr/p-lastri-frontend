import React, { memo, FunctionComponent, useEffect, useState } from 'react'
import { Form, Button, Typography, Input, Select, Comment,  } from 'antd'
import { FieldInputComponent } from 'common/component/index.component'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import { useServiceStore } from 'store/service/_index-service.store'
import { observer } from 'mobx-react'

// form layout
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 7 },
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 7
  },
};

// form consult online
interface FormConsult {
  serviceId: string
  question: string
}

const defaultValue: FormConsult = {
  serviceId: '',
  question: ''
}

// form consult schema
const FormConsultSchema: yup.ObjectSchema<FormConsult> = yup.object().shape({
  serviceId: yup.string().required().defined(),
  question: yup.string().required().defined(),
}).defined()


const FormConsultOnlineComponent: FunctionComponent = () => {
  // use service store
  const { serviceStore, qnaStore, authStore } = useServiceStore()
  const [user, setUser] = useState<any>()

  // use form role modal
  // const modalFormRole = useModalFormRole()

  // use form
  const formConsultContext = useForm<FormConsult>({
    resolver: yupResolver(FormConsultSchema),
    mode: 'onChange',
  })

  // submit handler
  const onSubmitConsult = async (consultData: FormConsult) => {
    // console.log(consultData)
    const result = await qnaStore.createQuestion(user?.id, consultData)
    result && formConsultContext.reset(defaultValue)
    // result && modalFormRole.close()
  }

  // use effect
  useEffect(() => {
    init()
    serviceStore.fetchServices()
  }, [])

  const init = async () => {
    const user = `${await authStore.getUser()}`
    const parse = JSON.parse(user)
    setUser(parse)
    console.log(parse)
  }

  return (
    <FormProvider {...formConsultContext}>
      <Form onSubmitCapture={formConsultContext.handleSubmit(onSubmitConsult)} {...layout} layout="horizontal">
        <Form.Item
          required
          label={<Typography.Text strong> Layanan </Typography.Text>}
          validateStatus={formConsultContext.errors.serviceId?.message && 'error'}
          help={formConsultContext.errors.serviceId?.message}
        >
          <Controller
            as={
              <Select showSearch placeholder="Layanan">
                {/* <Select.Option value="Admin"> Admin </Select.Option>
                <Select.Option value="Verifikator"> Verifikator </Select.Option>
                <Select.Option value="Helpdesk"> Helpdesk </Select.Option> */}
                {serviceStore.getServices.map((item: any, index) => (
                  <Select.Option value={item.id}> {item.name} </Select.Option>
                ))}
              </Select>
            }
            control={formConsultContext.control}
            name="serviceId"
          // defaultValue="Admin"
          />
        </Form.Item>
        <Form.Item
          required
          label={<Typography.Text strong> Pertanyaan </Typography.Text>}
          validateStatus={formConsultContext.errors.question?.message && 'error'}
          help={formConsultContext.errors.question?.message}
        >
          <Controller
            as={
              <Input.TextArea />
            }
            control={formConsultContext.control}
            name="question"
          // defaultValue="Admin"
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit"
          // disabled={!formRegisterContext.formState.isValid}
          >
            SEND
          </Button>
        </Form.Item>
      </Form>
    </FormProvider>
  )
}

export default memo(observer(FormConsultOnlineComponent))
