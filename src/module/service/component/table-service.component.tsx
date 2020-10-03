import React, { memo, FunctionComponent, useEffect } from 'react'
import { Table, Tag, Space, Button, Tooltip, Menu, Dropdown, notification } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { CardComponent } from 'common/component/index.component';
import { EditOutlined, EllipsisOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons';
import TableActionComponent from './table-action.component';
import { observer } from 'mobx-react';
import { useServiceStore } from 'store/service/_index-service.store';

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

  // use store
  const { serviceStore } = useServiceStore()

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
      title: 'Nama Layanan',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Deskripsi Layanan',
      dataIndex: 'description',
      key: 'description',
      render: (description) => <span style={{ color: 'rgba(0,0,0,0.3)' }}> <i> {description || `Tidak ada deskripsi`} </i> </span>
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
      render: (text, record) => (<TableActionComponent />)
    },
  ];

  // use effect
  useEffect(() => {
    serviceStore.fetchServices()
    // onInit()
  }, [])

  // const onInit = async () => {
  //   const result = await serviceStore.fetchServices()
  //   !result && (
  //     notification.error({
  //       message: 'Error',
  //       description: 'Terjadi gangguan pada server',
  //       placement: 'bottomRight'
  //     })
  //   )
  // }

  return (
    <CardComponent>
      <Table dataSource={serviceStore.getServices} columns={columns} size="small" />
    </CardComponent>
  )
}

export default memo(observer(TableServiceComponent))
