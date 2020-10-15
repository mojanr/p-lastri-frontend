import React, { memo, FunctionComponent, useEffect, useState, Fragment } from 'react'
import { CardComponent, HeaderComponent, PageTransitionComponent } from 'common/component/index.component'
import { Alert, Button, Form, Space, Table, Tag, Typography, Upload as AntUpload } from 'antd'
// import TableRoleComponent from '../component/table-role.component'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'
// import ModalFormRoleComponent, { useModalFormRole } from '../component/modal-form-role.component'
import { observer } from 'mobx-react'
import { useServiceStore } from 'store/service/_index-service.store'
import { useLocation, useParams } from 'react-router-dom'
import CreateSubmissionComponent from 'common/component/submission/create-submission.component'
import styled from 'styled-components'

const Upload = styled(AntUpload)`
  display: grid;
  grid-template-columns: 120px 250px;
`



const SubmissionPage: FunctionComponent = () => {
  // use modal form role
  // const modalFormRole = useModalFormRole()

  // open modal
  // const openModalFormRole = () => modalFormRole.open()

  // use service store
  const { authStore } = useServiceStore()

  // use state
  const [user, setUser] = useState<any>()

  // use param
  const param = useParams<{ submissionTypeId: string }>()

  // use service store
  const { submissionStore } = useServiceStore()

  const columns = [
    {
      title: 'Index',
      key: 'name',
      width: 50,
      render: (text: any, record: any, index: number) => <b>{index + 1}</b>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // width: 200,
      render: (text: any, record: any, index: number) => (
        <Fragment>
          {record?.required && <span style={{ color: 'red', fontWeight: 'bold' }}> * </span>}
          {record?.template ? <a href={`${process.env.REACT_APP_API_URL}/submission/storage/template/${record?.template}`} target="_blank"> {text} </a> : <span> {text} </span>}
        </Fragment>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 200,
      render: (isActive: any, record: any) => {
        switch (isActive) {
          // case 100:
          //   return (<Tag> Belum Diverifikasi </Tag>)
          //   break;
          // case 103:
          //   return (<Tag color="green"> Approve </Tag>)
          //   break;
          case 102:
            return (<div><Tag color="red"> Reject </Tag> {record.reason} </div>)
            break;
          default:
            break;
        }
      },
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'helpdeskStatus',
    //   key: 'helpdeskStatus',
    //   width: 200,
    //   render: (isActive: any) => {
    //     switch (isActive) {
    //       case 100:
    //         return (<Tag> Belum Diverifikasi Helpdesk </Tag>)
    //         break;
    //       case 103:
    //         return (<Tag color="green"> Approve Helpdesk </Tag>)
    //         break;
    //       case 102:
    //         return (<Tag color="red"> Reject Helpdesk </Tag>)
    //         break;
    //       default:
    //         break;
    //     }
    //   },
    // },
    // {
    //   title: 'Status',
    //   dataIndex: 'verifikatorStatus',
    //   key: 'verifikatorStatus',
    //   width: 200,
    //   render: (isActive: any) => {
    //     switch (isActive) {
    //       case 100:
    //         return (<Tag> Belum Diverifikasi Verifikator </Tag>)
    //         break;
    //       case 103:
    //         return (<Tag color="green"> Approve Verifikator </Tag>)
    //         break;
    //       case 102:
    //         return (<Tag color="red"> Reject Verifikator </Tag>)
    //         break;
    //       default:
    //         break;
    //     }
    //   },
    // },
    {
      title: 'Action',
      key: 'action',
      width: 370,
      render: (text: any, record: any, index: number) => {
        const Upload = styled(AntUpload)`
          display: grid;
          grid-template-columns: 120px 250px;
        `
        const props = {
          action: `${process.env.REACT_APP_API_URL}/submission/requirement/${record.id}`,
          // method: 'Put',
          multiple: false,
          accept: '.pdf',
          data: {
            test: '1',
            test2: '2'
          }
          // beforeUpload: 
        };

        return (
          <div>
            {submissionStore?.getActiveSubmission?.status == 100 && (record.status == 100 || record.status == 102) && (
              <Upload {...props} className="test">
                <Button>
                  <UploadOutlined /> Upload
              </Button>
              </Upload>
            )}
            {submissionStore?.getActiveSubmission?.status == 101 && record.status == 100 && (
              <a href={`${process.env.REACT_APP_API_URL}/submission/storage/submission/${record?.file}`} target="_blank"> {record.file} </a>
            )}
          </div>
        )
      },
    },
  ];

  // use effect
  useEffect(() => {
    init()
  }, [param.submissionTypeId])

  const init = async () => {
    const user = `${await authStore.getUser()}`
    const parse = JSON.parse(user)
    setUser(parse)
    // console.log(parse)
    submissionStore.fetchActiveSubmission(param.submissionTypeId, parse.id)
  }

  // create submission
  const createSubmission = () => {
    submissionStore.createSubmission(param.submissionTypeId, user.id)
  }

  // submit submission
  const submitSubmission = () => {
    submissionStore.submitSubmission(submissionStore?.getActiveSubmission?.id, param.submissionTypeId, user.id)
  }

  // cancel submission
  const cancelSubmission = () => {
    submissionStore.cancelSubmission(submissionStore?.getActiveSubmission?.id, param.submissionTypeId, user.id)
  }

  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent
        title="Pengajuan Registrasi dan Verifikasi"
      // extra={[
      //   <Button key="extra:1" type="primary" icon={<PlusOutlined />}> Create Submission </Button>
      // ]}
      />

      {/* CREATE SUBMISSION BUTTON */}
      {!submissionStore?.getActiveSubmission && <CreateSubmissionComponent onCreate={createSubmission} />}

      {/* <TableRoleComponent />

      {/* MODAL CREATE OR EDIT ROLE */}
      {/* <ModalFormRoleComponent /> */}
      {/* {console.log('active submission', submissionStore?.getActiveSubmission?.submissionRequirements)} */}
      {submissionStore?.getActiveSubmission && (
        <PageTransitionComponent direction="vertical">
          <CardComponent elevation="e300">
            <HeaderComponent title="Upload Dokumen Persyaratan" />
            <Form.Item>
              <Alert type="warning" message={
                <Typography.Text strong >
                  Dokumen persyaratan yang diupload untuk pengajuan masih dapat diubah selama belum menekan tombol <b>SUBMIT</b>.
                  Pastikan dokumen yang anda upload sudah sesuai sebelum melakukan <b>SUBMIT</b> pengajuan
                </Typography.Text>
              } />
            </Form.Item>
            <Table columns={columns} dataSource={submissionStore?.getActiveSubmission?.submissionRequirements} pagination={false} showHeader={false} />
            <div style={{ textAlign: 'center', marginTop: 15 }}>
              {submissionStore?.getActiveSubmission.status !== 101 && (
                <Space>
                  <Button type="primary" onClick={submitSubmission}> SUBMIT </Button>
                  <Button type="default" danger onClick={cancelSubmission}> CANCEL </Button>
                </Space>
              )}
            </div>
          </CardComponent>
        </PageTransitionComponent>
      )}
    </PageTransitionComponent>
  )
}

export default memo(observer(SubmissionPage))
