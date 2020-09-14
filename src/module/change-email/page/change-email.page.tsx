import React, { memo, FunctionComponent, useState } from 'react'
import { PageTransitionComponent, HeaderComponent, CardComponent } from 'common/component/index.component'
import styled from 'styled-components'
import { Button, Empty, Typography, Space, Form, Table, Tag, Upload as AntUpload, Alert } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const CreateSubmission = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CreateSubmissionContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Upload = styled(AntUpload)`
  display: grid;
  grid-template-columns: 120px 250px;
`

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  multiple: false,
};

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
    width: 370,
    render: (text: any, record: any) => (
      <Upload {...props} className="test">
        <Button>
          <UploadOutlined /> Upload
        </Button>
      </Upload>
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

const ChangeEmailPage: FunctionComponent = () => {
  const [isCreateSubmission, setCreateSubmission] = useState<boolean>(false)

  // create submission
  const createSubmission = () => setCreateSubmission(true)

  // cancel create submission
  const cancelSubmission = () => setCreateSubmission(false)

  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Pengajuan Ganti Email" />

      {!isCreateSubmission &&
        <CreateSubmission>
          <CreateSubmissionContainer>
            <Form.Item>
              <Empty description={<Typography.Text strong> Sedang tidak ada pengajuan yang aktif </Typography.Text>} />
            </Form.Item>
            <Button type="primary" onClick={createSubmission}> Buat Pengajuan </Button>
          </CreateSubmissionContainer>
        </CreateSubmission>
      }

      {isCreateSubmission &&
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
            <Table columns={columns} dataSource={data} pagination={false} showHeader={false} />
            <div style={{ textAlign: 'center', marginTop: 15 }}>
              <Space>
                <Button type="primary"> SUBMIT </Button>
                <Button type="default" danger onClick={cancelSubmission}> CANCEL </Button>
              </Space>
            </div>
          </CardComponent>
        </PageTransitionComponent>
      }
    </PageTransitionComponent>
  )
}

export default memo(ChangeEmailPage)
