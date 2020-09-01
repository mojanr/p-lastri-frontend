import React, { memo, FunctionComponent } from 'react'
import { Table, Tag, Space, Button, Tooltip } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { CardComponent } from 'common/component/index.component';
import { EditOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons';
const dataSource = [
  {
    id: '1',
    nama: 'Mike',
    status: true,
  },
  {
    id: '1',
    nama: 'Mike',
    status: true,
  },
  {
    id: '1',
    nama: 'Mike',
    status: false,
  },
];



const TableServiceComponent: FunctionComponent = () => {


  const columns: ColumnsType<any> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nama Layanan',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <Tag color={status ? 'green' : 'red'}> {status ? 'Active' : 'Inactive'} </Tag>
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <Space direction="horizontal" size={10}>
          {/* <Tooltip placement="bottom" title="Edit"> */}
          <Button icon={<EditOutlined />} type="default" size="small" />
          <Button icon={record.status ? <LockOutlined /> : <UnlockOutlined />} type="default" size="small" />
          {/* </Tooltip> */}
        </Space>
      )
    },
  ];

  return (
    <CardComponent>
      <Table dataSource={dataSource} columns={columns} size="small" />
    </CardComponent>
  )
}

export default memo(TableServiceComponent)
