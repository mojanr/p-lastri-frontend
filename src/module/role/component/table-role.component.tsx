import React, { memo, FunctionComponent, useEffect } from 'react'
import { Table, Tag, Space, Button, Tooltip } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { CardComponent } from 'common/component/index.component';
import { useModalFormRole } from './modal-form-role.component';
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



const TableRoleComponent: FunctionComponent = () => {
  // use modal form role
  const modalFormRole = useModalFormRole()

  // open modal form role
  const openModalFormRole = () => modalFormRole.open()

  // use service store
  const { roleStore } = useServiceStore()

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
      title: 'Nama Role',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Deskripsi Role',
      dataIndex: 'description',
      key: 'description',
      render: (description) => <span style={{ color: 'rgba(0,0,0,0.3)' }}> <i> {description || `Tidak ada deskripsi`} </i> </span>
    },
    // {
    //   title: 'Role',
    //   dataIndex: 'role',
    //   key: 'role',
    //   render: (role) => <Tag> {role} </Tag>
    // },
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
    roleStore.fetchRoles()
  }, [])

  return (
    <CardComponent>
      <Table dataSource={roleStore.getRoles} columns={columns} size="small" />
    </CardComponent>
  )
}

export default memo(observer(TableRoleComponent))
