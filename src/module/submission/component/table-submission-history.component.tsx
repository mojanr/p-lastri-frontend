import React, { memo, FunctionComponent, useState, useEffect } from 'react'
import { CardComponent, HeaderComponent, PageTransitionComponent } from 'common/component/index.component'
import { Alert, Button, Form, Space, Table, Tag, Typography, Upload as AntUpload } from 'antd'
// import TableRoleComponent from '../component/table-role.component'
import { PlusOutlined } from '@ant-design/icons'
// import ModalFormRoleComponent, { useModalFormRole } from '../component/modal-form-role.component'
import { observer } from 'mobx-react'
import { useServiceStore } from 'store/service/_index-service.store'
import { Link, useParams } from 'react-router-dom'

const TableSubmissionHistoryComponent: FunctionComponent = () => {
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

  // use effect
  useEffect(() => {
    init()
  }, [param.submissionTypeId])

  const init = async () => {
    const user = `${await authStore.getUser()}`
    const parse = JSON.parse(user)
    setUser(parse)
    submissionStore.fetSubmissionHistory(parse?.id, param.submissionTypeId)
    // console.log(parse)
    // if (parse?.role?.name == 'Helpdesk') {
    //   submissionStore.fetchSubmissionVerificationHelpdesk(param.submissionTypeId)
    // } else {
    //   submissionStore.fetchSubmissionVerificationVerifikator(param.submissionTypeId)
    // }
  }


  // const columns = [
  //   {
  //     title: 'Index',
  //     key: 'index',
  //     // width: 200,
  //     render: (text: any, record: any, index: number) => <b>{index + 1}</b>,
  //   },
  //   {
  //     title: 'ID Pengajuan',
  //     dataIndex: 'id',
  //     key: 'id',
  //     // width: 200,
  //     render: (id: any) => <a>{id}</a>,
  //   },
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //     key: 'name',
  //     // width: 200,
  //     render: (text: any) => <span>{text}</span>,
  //   },
  //   {
  //     title: 'Action',
  //     key: 'action',
  //     // width: 370,
  //     render: (text: any, record: any) => (
  //       // <Upload {...props} className="test">
  //       //   <Button>
  //       //     <UploadOutlined /> Upload
  //       //   </Button>
  //       // </Upload>
  //       <Space>
  //         <Button type="primary" color="green"> Approve </Button>
  //         <Button type="primary" danger> Reject </Button>
  //       </Space>
  //     ),
  //   },
  // ];

  const columns = [
    {
      title: 'ID Pengajuan',
      dataIndex: 'id',
      key: 'id',
      width: 200,
      // render: (submissionId: string) => <Link to={`/main/submission/verification/${param.submissionTypeId}/${submissionId}`}> {submissionId} </Link>
    },
    // {
    //   title: 'Perusahaan',
    //   dataIndex: 'name',
    //   key: 'name',
    // },
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
            return (<Tag color="green"> Selesai </Tag>)
            break;
          case 105:
            return (<Tag color="red"> Cancel </Tag>)
            break;
          default:
            break;
        }
      },
      width: 50,
    },
    {
      title: 'Keterangan',
      dataIndex: 'comment',
      key: 'comment',
      // width: 50,
      // render: (submissionId: string) => <Link to={`/main/submission/verification/${param.submissionTypeId}/${submissionId}`}> {submissionId} </Link>
      render: (comment: string) => <a href={comment} target="_blank"> {comment} </a>
      // render: (comment: string) => <span> {comment} </span>
    },
    // {
    //   title: 'Status',
    //   dataIndex: 'status',
    //   key: 'status',
    // },
    // {
    //   title: 'Progres Verifikasi',
    //   dataIndex: 'documents',
    //   key: 'documents',
    //   render: (documents: any) => <Progress percent={progressDocument(documents)} size="small" status="active" />
    // },
  ];

  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent
        title="Riwayat Pengajuan"
      // extra={[
      //   <Button key="extra:1" type="primary" icon={<PlusOutlined />}> Verifikasi Pengajuan </Button>
      // ]}
      />

      {/* <TableRoleComponent />

      {/* MODAL CREATE OR EDIT ROLE */}
      {/* <ModalFormRoleComponent /> */}

      <CardComponent elevation="e300">
        <Table columns={columns} dataSource={submissionStore.getSubmissionHistory} />
      </CardComponent>
    </PageTransitionComponent>
  )
}

export default memo(observer(TableSubmissionHistoryComponent))
