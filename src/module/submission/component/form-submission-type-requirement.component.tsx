import React, { memo, FunctionComponent, useState } from 'react'
import { Form, Button, Checkbox, Typography, Upload } from 'antd'
import { FieldInputComponent } from 'common/component/index.component'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import { UploadOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react'
import { useServiceStore } from 'store/service/_index-service.store'
import { useParams } from 'react-router-dom'
import { useModalFormSubmissionTypeRequirement } from './modal-form-submission-type-requirement.component'

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

// form submission type requirement
interface FormSubmissionTypeRequirement {
  name: string
  description?: string
  template?: string
  isRequired?: boolean
}

// form submission type schema
const FormSubmissionTypeRequirementSchema: yup.ObjectSchema<FormSubmissionTypeRequirement> = yup.object().shape({
  name: yup.string().required().defined(),
  description: yup.string(),
  template: yup.string(),
  isRequired: yup.boolean()
}).defined()



const FormSubmissionTypeRequirementComponent: FunctionComponent = () => {
  // state
  const [fileList, setFileList] = useState<any>([])

  // use param
  const { submissionTypeId } = useParams<{ submissionTypeId: string }>()

  // use modal form submission type requirement
  const modalFormSubmissionTypeRequirement = useModalFormSubmissionTypeRequirement()

  // upload props
  const uploadProps = {
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    accept: '.pdf',
    multiple: false,
    beforeUpload: (file: any) => {
      // this.setState(state => ({
      //   fileList: [...state.fileList, file],
      // }));
      setFileList([file])
      return false;
    },
    onRemove: (file: any) => {
      setFileList([])
    },
    fileList
  };

  // use service store
  const { submissionStore } = useServiceStore()

  // use form
  const formSubmissionTypeRequirementContext = useForm<FormSubmissionTypeRequirement>({
    resolver: yupResolver(FormSubmissionTypeRequirementSchema),
    mode: 'onChange',
  })

  // submit handler
  const onSubmitSubmissionType = (submissionTypeRequirementData: FormSubmissionTypeRequirement) => {
    // console.log(submissionTypeRequirementData)
    // console.log(fileList)
    const formData = new FormData()
    formData.append("name", submissionTypeRequirementData.name)
    formData.append("description", submissionTypeRequirementData.description || '')
    formData.append("template", fileList[0])
    formData.append("isRequired", submissionTypeRequirementData.isRequired ? 'true' : 'false')

    const result = submissionStore.createSubmissionTypeRequirement(submissionTypeId, formData)
    result && modalFormSubmissionTypeRequirement.close()
  }

  return (
    <FormProvider {...formSubmissionTypeRequirementContext}>
      <Form onSubmitCapture={formSubmissionTypeRequirementContext.handleSubmit(onSubmitSubmissionType)} {...layout} layout="horizontal">
        <FieldInputComponent required label="Nama Dokumen" name="name" placeholder="Nama Dokumen" />
        <FieldInputComponent label="Deskripsi Dokumen" name="description" placeholder="Deskripsi Dokumen" />
        <Form.Item
          label="Template file"
          validateStatus={formSubmissionTypeRequirementContext.errors?.isRequired?.message && 'error'}
          help={formSubmissionTypeRequirementContext.errors?.isRequired?.message}
        >
          <Upload {...uploadProps} className="test" ref={formSubmissionTypeRequirementContext.register} name="template">
            <Button>
              <UploadOutlined /> Upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Wajib upload"
          validateStatus={formSubmissionTypeRequirementContext.errors?.isRequired?.message && 'error'}
          help={formSubmissionTypeRequirementContext.errors?.isRequired?.message}
        >
          <Controller
            name="isRequired"
            control={formSubmissionTypeRequirementContext.control}
            render={({ onChange, onBlur, value }) => (
              <Checkbox onChange={e => { onChange(e.target.checked) }} checked={value}> <Typography.Text strong > Ya </Typography.Text>  </Checkbox>
            )}
          />
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

export default memo(observer(FormSubmissionTypeRequirementComponent))
