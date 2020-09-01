import React, { memo, FunctionComponent } from 'react'
import { Table, Tag, Space, Button, Tooltip } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { CardComponent } from 'common/component/index.component';
import { EditOutlined } from '@ant-design/icons';

const dataSource = [
  {
    id: '1',
    nama: 'Mike',
    email: 'Mike@email.com',
    role: 'admin',
    status: true,
  },
  {
    id: '1',
    nama: 'Mike',
    email: 'Mike@email.com',
    role: 'helpdesk',
    status: true,
  },
  {
    id: '1',
    nama: 'Mike',
    email: 'Mike@email.com',
    role: 'verifikator',
    status: false,
  },
];

const TableProviderComponent: FunctionComponent = () => {

  const columns: ColumnsType<any> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role) => <Tag> {role} </Tag>
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
      render: () => (
        <Space direction="horizontal" size={10}>
          {/* <Tooltip placement="bottom" title="Edit"> */}
          <Button icon={<EditOutlined />} type="link" size="small"> Edit </Button>
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

export default memo(TableProviderComponent)
