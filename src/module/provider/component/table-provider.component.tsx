import React, { memo, FunctionComponent, useEffect } from 'react'
import { Table, Tag } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { CardComponent } from 'common/component/index.component';
import TableActionComponent from './table-action.component';
import { useServiceStore } from 'store/service/_index-service.store';
import { observer } from 'mobx-react';

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

  // use store
  const { providerStore } = useServiceStore()

  const columns: ColumnsType<any> = [
    {
      title: 'No',
      key: 'no',
      render: (value, record, index) => index+1,
      width: 50
    },
    // {
    //   title: 'ID',
    //   dataIndex: 'id',
    //   key: 'id',
    // },
    {
      title: 'Nama',
      dataIndex: 'info',
      key: 'info',
      render: (info) => info?.name
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
      render: (role) => <Tag> {role?.name} </Tag>
    },
    {
      title: 'Status',
      dataIndex: 'active',
      key: 'active',
      render: (isActive) => <Tag color={isActive ? 'green' : 'red'}> {isActive ? 'Active' : 'Inactive'} </Tag>,
      width: 150,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: 150,
      render: () => (<TableActionComponent />)
    },
  ];

  // use effect
  useEffect(() => {
    providerStore.fetchProviders()
  }, [])
  
  return (
    <CardComponent>
      <Table dataSource={providerStore.getProviders} columns={columns} size="small" />
    </CardComponent>
  )
}

export default memo(observer(TableProviderComponent))
