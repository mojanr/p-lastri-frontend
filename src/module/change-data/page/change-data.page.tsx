import React, { memo, FunctionComponent } from 'react'
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
    name: 'Dokumen persyaratan 1',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Dokumen persyaratan 2',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Dokumen persyaratan 3',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const ChangeDataPage: FunctionComponent = () => {
  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Pengajuan Ubah Data" />

      <CreateSubmission>
        <CreateSubmissionContainer>
          <Form.Item>
            <Empty description={<Typography.Text strong> Sedang tidak ada pengajuan yang aktif </Typography.Text>} />
          </Form.Item>
          <Button type="primary"> Buat Pengajuan </Button>
        </CreateSubmissionContainer>
      </CreateSubmission>

      <CardComponent elevation="e300">
        <HeaderComponent title="Upload Dokumen Persyaratan" />
        <Form.Item>
          <Alert type="warning" message={
            <Typography.Text strong >
              Dokumen persyaratan yang diupload untuk pengajuan masih dapat diubah selama belum menekan tombol <b>SUBMIT</b>.
              Pastikan dokumen yang anda upload sudah sesuai sebelum melakukan <b>SUBMIT</b> pengajuan
            </Typography.Text>
            }/>
        </Form.Item>
        <Table columns={columns} dataSource={data} pagination={false} showHeader={false} />
        <div style={{ textAlign: 'center' }}>
          <Space>
            <Button type="primary"> SUBMIT </Button>
            <Button type="default" danger> CANCEL </Button>
          </Space>
        </div>
      </CardComponent>
    </PageTransitionComponent>
  )
}

export default memo(ChangeDataPage)
