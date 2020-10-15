import React, { memo, FunctionComponent, useState, useEffect } from 'react'
import { PageTransitionComponent, HeaderComponent } from 'common/component/index.component'
import { Button, Empty, Typography, Space, Form, Table, Tag, Upload as AntUpload, Alert, Modal, Input } from 'antd'
import { observer } from 'mobx-react';
import { useServiceStore } from 'store/service/_index-service.store';
import { useHistory, useParams } from 'react-router-dom';
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




const data = [
  {
    key: '1',
    name: 'FORMULIR KEIKUTSERTAAN',
  },
  {
    key: '2',
    name: 'FORMULIR PENDAFTARAN',
  },
  {
    key: '3',
    name: 'KTP DIREKTUR',
  },
  {
    key: '4',
    name: 'NPWP PERUSAHAAN',
  },
  {
    key: '5',
    name: `TDP/ NIB – OSS`,
  },
  {
    key: '6',
    name: 'IJIN USAHA (SIUP/IUJK/IUI/TDI/PAK/PAB/DLL) – OSS',
  },
  {
    key: '7',
    name: 'IJIN LOKASI (SITU/HOG/IG/UUG) – OSS',
  },
  {
    key: '8',
    name: 'PKP/ SK – NON PKP',
  },
  {
    key: '9',
    name: 'AKTA PENDIRIAN DAN SK PENGUKUHAN KEMENKUMHAM SESUAI UU NO 40 TAHUN 2007 (UNTUK PT) ATAU AHU (UNTUK CV)',
  },
  {
    key: '10',
    name: 'AKTA PERUBAHAN TERAKHIR DAN SK PENGUKUHAN KEMENKUMHAM SESUAI UU NO 40 TAHUN 2007 (UNTUK PT) ATAU AHU (UNTUK CV)',
  },
  {
    key: '11',
    name: 'DOKUMEN PENDUKUNG LAINNYA',
  },
  // {
  //   key: '12',
  //   name: 'AKTA PENDIRIAN DAN SK PENGUKUHAN KEMENKUMHAM SESUAI UU NO 40 TAHUN 2007 (UNTUK PT) ATAU AHU (UNTUK CV)',
  // },
  // {
  //   key: '9',
  //   name: 'AKTA PENDIRIAN DAN SK PENGUKUHAN KEMENKUMHAM SESUAI UU NO 40 TAHUN 2007 (UNTUK PT) ATAU AHU (UNTUK CV)',
  // },
];

const SubmissionApprovalVerificationPage: FunctionComponent = () => {
  // use service store
  const { authStore } = useServiceStore()

  // use history
  const history = useHistory()

  // use state
  const [user, setUser] = useState<any>()

  // use param
  const param = useParams<{ submissionTypeId: string, submissionId: string }>()

  // use service store
  const { submissionStore } = useServiceStore()

   // use form
   const formConsultContext = useForm<FormConsult>({
    resolver: yupResolver(FormConsultSchema),
    mode: 'onChange',
  })

  const [modalAnswer, setModalAnswer] = useState<{
    submissionRequirementId: string
    visible: boolean
    // previewTitle?: any
  }>({
    submissionRequirementId: '',
    visible: false
    // previewTitle: null
  })

  const rejectSubmission = (submissionRequirement: any) => {
    setModalAnswer({
      submissionRequirementId: submissionRequirement.id,
      visible: true
    })
  }

  // close modal
  const closeModal = () => setModalAnswer({ ...modalAnswer, visible: false })

  // submit answer
  const onSubmitAnswer = (answerData: any) => {
    reject(modalAnswer.submissionRequirementId, answerData.answer)
    closeModal()
  }

  // approve
  const approve = (submissionRequirementId: string) => {
    submissionStore.approveRequirement(param.submissionTypeId, param.submissionId, submissionRequirementId)
  }

  // reject
  const reject = (submissionRequirementId: string, reasonReject: string) => {
    submissionStore.rejectRequirement(param.submissionTypeId, param.submissionId, submissionRequirementId, reasonReject)
  }

  const columns = [
    {
      title: 'Index',
      key: 'name',
      width: 50,
      render: (text: any, record: any, index: number) => <b>{index + 1}</b>,
    },
    {
      title: 'Nama Dokumen',
      dataIndex: 'name',
      key: 'name',
      // width: 200,
      render: (name: any, record: any, index: number) => <span>{name}</span>
    },
    {
      title: 'Dokumen Upload',
      dataIndex: 'file',
      key: 'file',
      width: 200,
      render: (file: any, record: any, index: number) => (file ? <a href={`${process.env.REACT_APP_API_URL}/submission/storage/submission/${file}`} target="_blank"> {file} </a> : 'Belum upload')
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      // width: 200,
      render: (isActive: any) => {
        switch (isActive) {
          case 100:
            return (<Tag> Belum Diverifikasi </Tag>)
            break;
          case 103:
            return (<Tag color="green"> Approve </Tag>)
            break;
          case 102:
            return (<Tag color="red"> Reject </Tag>)
            break;
          default:
            break;
        }
      },
      width: 150,
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
          <Button type="primary" color="green" onClick={() => approve(record.id)}> Approve </Button>
          <Button type="primary" danger onClick={() => rejectSubmission(record)}> Reject </Button>
        </Space>
      ),
    },
  ];

  // use effect
  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const user = `${await authStore.getUser()}`
    const parse = JSON.parse(user)
    setUser(parse)
    submissionStore.fetchSubmissionApprovalRequirement(param.submissionTypeId, param.submissionId)
    // // console.log(parse)
    // if (parse?.role?.name == 'Helpdesk') {
    //   submissionStore.fetchSubmissionVerificationHelpdesk(param.submissionTypeId)
    // } else {
    //   submissionStore.fetchSubmissionVerificationVerifikator(param.submissionTypeId)
    // }
  }

  // submit approva
  const submitApproval = () => {
    if (user.role.name == 'Helpdesk') {
      submissionStore.submitApprovalHelpdesk(param.submissionId)
    } else {
      submissionStore.submitApprovalVerifikator(param.submissionId)
    }
    // console.log(parse)
    if (user?.role?.name == 'Helpdesk') {
      submissionStore.fetchSubmissionVerificationHelpdesk(param.submissionTypeId)
    } else {
      submissionStore.fetchSubmissionVerificationVerifikator(param.submissionTypeId)
    }
    history.push(`/main/submission/verification/${param.submissionTypeId}`)
  }

  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Approval Pengajuan" />
      {console.log(submissionStore?.getSubmissionApprovalData)}
      <Table columns={columns} dataSource={submissionStore?.getSubmissionApprovalRequirement} pagination={false} showHeader={false} />
      <div style={{ textAlign: 'center', marginTop: 15 }}>
        <Space>
          <Button type="primary" onClick={submitApproval}> SUBMIT </Button>
          {/* <Button type="default" danger onClick={cancelSubmission}> CANCEL </Button> */}
        </Space>
      </div>

      <Modal
        visible={modalAnswer.visible}
        title="Alasan Reject"
        footer={null}
        onCancel={closeModal}
        destroyOnClose={true}
      // onOk={}
      >
        {/* <Typography.Text strong> {modalAnswer.question} </Typography.Text> */}
        {/* <br />
        <br /> */}
        <FormProvider {...formConsultContext}>
          <Form onSubmitCapture={formConsultContext.handleSubmit(onSubmitAnswer)} layout="vertical">
            <Form.Item
              required
              label={<Typography.Text strong> Alasan Reject </Typography.Text>}
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
    </PageTransitionComponent>
  )
}

export default memo(observer(SubmissionApprovalVerificationPage))
