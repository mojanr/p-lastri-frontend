import React, { memo, FunctionComponent } from 'react'
import { Form, Button } from 'antd'
import { FieldInputComponent } from 'common/component/index.component'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import { observer } from 'mobx-react'
import { useServiceStore } from 'store/service/_index-service.store'
import { useModalFormSubmissionType } from './modal-form-submission-type.component'

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

// form submission
interface FormSubmissionType {
  name: string
  description?: string
}

// form submission type schema
const FormSubmissionTypeSchema: yup.ObjectSchema<FormSubmissionType> = yup.object().shape({
  name: yup.string().required().defined(),
  description: yup.string(),
}).defined()


const FormSubmissionTypeComponent: FunctionComponent = () => {
  // use store
  const { submissionStore } = useServiceStore()

  // use modal form submission type
  const modalFormSubmissionType = useModalFormSubmissionType()

  // use form
  const formSubmissionTypeContext = useForm<FormSubmissionType>({
    resolver: yupResolver(FormSubmissionTypeSchema),
    mode: 'onChange',
  })

  // submit handler
  const onSubmitSubmissionType = async (submissionTypeData: FormSubmissionType) => {
    const result = await submissionStore.createSubmissionType(submissionTypeData)
    result && modalFormSubmissionType.close()
  }

  return (
    <FormProvider {...formSubmissionTypeContext}>
      <Form onSubmitCapture={formSubmissionTypeContext.handleSubmit(onSubmitSubmissionType)} {...layout} layout="horizontal">
        <FieldInputComponent required label="Nama Jenis Pengajuan" name="name" placeholder="Nama Jenis Pengajuan" />
        <FieldInputComponent label="Deskripsi Jenis Pengajuan" name="description" placeholder="Deskripsi Jenis Pengajuan" />
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

export default memo(observer(FormSubmissionTypeComponent))
