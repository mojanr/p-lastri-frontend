import React, { memo, FunctionComponent } from 'react'
import { Table, Progress } from 'antd'
import { Link } from 'react-router-dom';

const TableApprovalComponent: FunctionComponent = () => {
  const dataSource = [
    {
      id: '1',
      namaPerusahaan: 'Mike',
      npwpPerusahaan: '101010101',
      status: '100',
      documents: [  
        {
          id: '101010',
          context: 'document',
          contextName: 'document Pengajuan',
          file: './data/data/data',
          status: '200'
        },
        {
          id: '101010',
          context: 'document',
          contextName: 'document Pengajuan',
          file: './data/data/data',
          status: '200'
        },
        {
          id: '101010',
          context: 'document',
          contextName: 'document Pengajuan',
          file: './data/data/data',
          status: '200'
        }
      ]
    },
    {
      id: '1',
      namaPerusahaan: 'Mike',
      npwpPerusahaan: '101010101',
      status: '100',
      documents: [  
        {
          id: '101010',
          context: 'document',
          contextName: 'document Pengajuan',
          file: './data/data/data',
          status: '100'
        },
        {
          id: '101010',
          context: 'document',
          contextName: 'document Pengajuan',
          file: './data/data/data',
          status: '200'
        }
      ]
    },
  ];

  const totalDocument = (documents: any) => documents.length
  const activeDocument = (documents: any) => totalDocument(documents.filter((item: any) => item.status === '100'))
  
  const progressDocument = (documents: any) => {
    const total = totalDocument(documents)
    const inProgress = activeDocument(documents) 
    return Math.round(( (total - inProgress) / total ) * 100)
  }
  
  const columns = [
    {
      title: 'ID Pengajuan',
      dataIndex: 'id',
      key: 'id',
      render: (submissionId: string) => <Link to={`/main/account/verification/${submissionId}`}> {submissionId} </Link>
    },
    {
      title: 'Perusahaan',
      dataIndex: 'namaPerusahaan',
      key: 'namaPerusahaan',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Progress',
      dataIndex: 'documents',
      key: 'documents',
      render: (documents: any) => <Progress percent={progressDocument(documents)} size="small" status="active" />
    },
  ];

  return (
    <Table loading={true} rowKey="key" dataSource={dataSource} columns={columns} />
  )
}

export default memo(TableApprovalComponent)
