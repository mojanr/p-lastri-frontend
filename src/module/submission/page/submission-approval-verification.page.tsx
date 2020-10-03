import React, { memo, FunctionComponent, useState, useEffect } from 'react'
import { PageTransitionComponent, HeaderComponent } from 'common/component/index.component'
import { Button, Empty, Typography, Space, Form, Table, Tag, Upload as AntUpload, Alert } from 'antd'
import { observer } from 'mobx-react';
import { useServiceStore } from 'store/service/_index-service.store';
import { useHistory, useParams } from 'react-router-dom';



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

  // approve
  const approve = (submissionRequirementId: string) => {
    submissionStore.approveRequirement(param.submissionTypeId, param.submissionId, submissionRequirementId)
  }

  // reject
  const reject = (submissionRequirementId: string) => {
    submissionStore.rejectRequirement(param.submissionTypeId, param.submissionId, submissionRequirementId)
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
          <Button type="primary" danger onClick={() => reject(record.id)}> Reject </Button>
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
    </PageTransitionComponent>
  )
}

export default memo(observer(SubmissionApprovalVerificationPage))
