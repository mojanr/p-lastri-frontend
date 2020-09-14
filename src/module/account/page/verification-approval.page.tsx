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

const VerificationApprovalPage: FunctionComponent = () => {
  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Approval Pengajuan Pembuatan Akun Baru" />

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
