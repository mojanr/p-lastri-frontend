import React, { memo, FunctionComponent } from 'react'
import { PageTransitionComponent, HeaderComponent } from 'common/component/index.component'
import { Button, Empty, Typography, Space, Form, Table, Tag, Upload as AntUpload, Alert } from 'antd'

const columns = [
  {
    title: 'Index',
    key: 'name',
    // width: 200,
    render: (text: any, record: any, index: number) => <b>{index + 1}</b>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // width: 200,
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    // width: 370,
    render: (text: any, record: any) => (
      // <Upload {...props} className="test">
      //   <Button>
      //     <UploadOutlined /> Upload
      //   </Button>
      // </Upload>
      <Space>
        <Button type="primary" color="green"> Approve </Button>
        <Button type="primary" danger> Reject </Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'SURAT PERMOHONAN GANTI EMAIL',
  },
  {
    key: '2',
    name: 'KTP DIREKTUR',
  },
  {
    key: '3',
    name: 'NPWP PERUSAHAAN',
  },
  {
    key: '4',
    name: 'IJIN USAHA (SIUP/IUJK/IUI/TDI/PAK/PAB/DLL) – OSS',
  },
  {
    key: '5',
    name: `AKTA PERUBAHAN TERAKHIR DAN SK PENGUKUHAN KEMENKUMHAM SESUAI UU NO 40 TAHUN 2007 (UNTUK PT) ATAU AHU (UNTUK CV)`,
  },
  {
    key: '6',
    name: 'DOKUMEN PENDUKUNG LAINNYA',
  },
  // {
  //   key: '7',
  //   name: 'IJIN USAHA (SIUP/IUJK/IUI/TDI/PAK/PAB/DLL) – OSS',
  // },
  // {
  //   key: '8',
  //   name: 'IJIN USAHA (SIUP/IUJK/IUI/TDI/PAK/PAB/DLL) – OSS',
  // },
];

const VerificationApprovalPage: FunctionComponent = () => {
  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Approval Pengajuan Ganti Email" />

      <Table columns={columns} dataSource={data} pagination={false} showHeader={false} />
      <div style={{ textAlign: 'center', marginTop: 15 }}>
        <Space>
          <Button type="primary"> SUBMIT </Button>
          {/* <Button type="default" danger onClick={cancelSubmission}> CANCEL </Button> */}
        </Space>
      </div>
    </PageTransitionComponent>
  )
}

export default memo(VerificationApprovalPage)
