import React, { memo, FunctionComponent, useState, useEffect } from 'react'
import { CardComponent, HeaderComponent, PageTransitionComponent } from 'common/component/index.component'
import { Alert, Button, Form, Input, Modal, Space, Table, Tag, Typography, Upload as AntUpload } from 'antd'
// import TableRoleComponent from '../component/table-role.component'
import { PlusOutlined } from '@ant-design/icons'
// import ModalFormRoleComponent, { useModalFormRole } from '../component/modal-form-role.component'
import { observer } from 'mobx-react'
import { useServiceStore } from 'store/service/_index-service.store'
import { Link, useParams } from 'react-router-dom'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'

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
  // serviceId: string
  answer: string
}

// form consult schema
const FormConsultSchema: yup.ObjectSchema<FormConsult> = yup.object().shape({
  // serviceId: yup.string().required().defined(),
  answer: yup.string().required().defined(),
}).defined()


const TableVerificationComponent: FunctionComponent = () => {
  // use modal form role
  // const modalFormRole = useModalFormRole()

  // open modal
  // const openModalFormRole = () => modalFormRole.open()

  // use service store
  const { authStore, qnaStore } = useServiceStore()

  // use state
  const [user, setUser] = useState<any>()

  // use param
  const param = useParams<{ submissionTypeId: string }>()

  const [modalAnswer, setModalAnswer] = useState<{
    questionId: string | number,
    question: string,
    visible: boolean
    // previewTitle?: any
  }>({
    questionId: '',
    question: '',
    visible: false
    // previewTitle: null
  })

  // // use service store
  // const { submissionStore } = useServiceStore()

  // use effect
  useEffect(() => {
    init()
  }, [param.submissionTypeId])

  const init = async () => {
    const user = `${await authStore.getUser()}`
    const parse = JSON.parse(user)
    setUser(parse)
    qnaStore.fetchUnAnsweredQuestion()
  }

  const answerQuestion = (qna: any) => {
    setModalAnswer({
      questionId: qna.id,
      question: qna.question,
      visible: true
    })
  }

  // use form
  const formConsultContext = useForm<FormConsult>({
    resolver: yupResolver(FormConsultSchema),
    mode: 'onChange',
  })


  // close modal
  const closeModal = () => setModalAnswer({ ...modalAnswer, visible: false })

  // submit answer
  const onSubmitAnswer = async (answerData: any) => {
    const result = await qnaStore.answerQuestion(modalAnswer.questionId, { answerBy: user?.id, answer: answerData.answer})
    result && closeModal()
  }

  const columns = [
    {
      title: 'ID Pertanyaan',
      dataIndex: 'id',
      key: 'id',
      width: 20,
      // render: (submissionId: string) => <Link to={`/main/submission/verification/${param.submissionTypeId}/${submissionId}`}> {submissionId} </Link>
      render: (value: string) => <span> {value} </span>
    },
    {
      title: 'Jenis Layanan',
      dataIndex: 'service',
      key: 'service',
      width: 100,
      render: (service: any) => <Tag> {service.name} </Tag>
    },
    {
      title: 'Pertanyaan',
      dataIndex: 'question',
      key: 'question',
      render: (question: string) => <p> {question} </p>
    },
    {
      title: 'Action',
      key: 'action',
      width: 200,
      render: (text: any, record: any) => (
        // <Upload {...props} className="test">
        //   <Button>
        //     <UploadOutlined /> Upload
        //   </Button>
        // </Upload>
        <Space>
          <Button type="default" onClick={() => answerQuestion(record)}> Jawab </Button>
          {/* <Button type="primary" danger onClick={() => reject(record.id)}> Reject </Button> */}
        </Space>
      ),
    },
  ];

  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent
        title="Jawab Pertanyaan Konsultasi Online"
      />


      <Modal
        visible={modalAnswer.visible}
        title="Jawab Pertanyaan"
        footer={null}
        onCancel={closeModal}
        destroyOnClose={true}
      // onOk={}
      >
        <Typography.Text strong> {modalAnswer.question} </Typography.Text>
        <br />
        <br />
        <FormProvider {...formConsultContext}>
          <Form onSubmitCapture={formConsultContext.handleSubmit(onSubmitAnswer)} layout="vertical">
            <Form.Item
              required
              label={<Typography.Text strong> Jawaban </Typography.Text>}
              validateStatus={formConsultContext.errors.answer?.message && 'error'}
              help={formConsultContext.errors.answer?.message}
            >
              <Controller
                as={
                  <Input.TextArea />
                }
                control={formConsultContext.control}
                name="answer"
              // defaultValue="Admin"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit"
              // disabled={!formRegisterContext.formState.isValid}
              >
                SEND
          </Button>
            </Form.Item>
          </Form>
        </FormProvider>
      </Modal>

      <CardComponent elevation="e300">
        <Table columns={columns} dataSource={qnaStore.unAnsweredQuestion} />
      </CardComponent>
    </PageTransitionComponent>
  )
}

export default memo(observer(TableVerificationComponent))
