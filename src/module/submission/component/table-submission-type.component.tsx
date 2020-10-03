import React, { memo, FunctionComponent, useEffect } from 'react'
import { Table, Tag, Space, Button, Tooltip } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { CardComponent } from 'common/component/index.component';
import { useModalFormSubmissionType } from './modal-form-submission-type.component';
import TableSubmissionTypeActionComponent from './table-submission-type-action.component';
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


const TableSubmissionTypeComponent: FunctionComponent = () => {
  // use store
  const { submissionStore } = useServiceStore()

  // use modal form submission type
  const modalFormSubmissionType = useModalFormSubmissionType()

  // open modal form submission type
  const openModalFormSubmissionType = () => modalFormSubmissionType.open()

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
      title: 'Nama Jenis Pengajuan',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Deskripsi Jenis Pengajuan',
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
      render: (value, record, index) => (<TableSubmissionTypeActionComponent id={record.id} />)
    },
  ];

  // use effect
  useEffect(() => {
    submissionStore.fetchSubmissionTypes()
  }, [])

  return (
    <CardComponent>
      <Table dataSource={submissionStore.getSubmissionTypes} columns={columns} size="small" />
    </CardComponent>
  )
}

export default memo(observer(TableSubmissionTypeComponent))
