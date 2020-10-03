import React, { memo, FunctionComponent, useEffect } from 'react'
import { Table, Tag, Space, Button, Tooltip } from 'antd'
import { ColumnsType } from 'antd/lib/table';
import { CardComponent } from 'common/component/index.component';
import { useModalFormSubmissionType } from './modal-form-submission-type.component';
import TableSubmissionTypeActionComponent from './table-submission-type-requirement-action.component';
import { useParams } from 'react-router-dom';
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


const TableSubmissionTypeRequirementComponent: FunctionComponent = () => {
  // use param
  const { submissionTypeId } = useParams<{ submissionTypeId: string }>()

  // use service store
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
      title: 'Nama Dokumen',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Deskripsi Dokumen',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Template',
      dataIndex: 'template',
      key: 'template',
      render: (template) => <a href={`${process.env.REACT_APP_API_URL}/submission/storage/template/${template}`} target="_blank"> {template} </a>
    },
    {
      title: 'Wajib Upload',
      dataIndex: 'required',
      key: 'required',
      render: (isRequired) => <Tag color={isRequired ? 'green' : 'red'}> {isRequired ? 'Ya' : 'Tidak'} </Tag>,
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
    submissionStore.fetchSubmissionTypeRequirements(submissionTypeId)
    return () => {
      submissionStore.dispatchSubmissionTypeRequirementsData()
    }
  }, [])

  return (
    <CardComponent>
      <Table dataSource={submissionStore.getSubmissionTypeRequirements} columns={columns} size="small" />
    </CardComponent>
  )
}

export default memo(observer(TableSubmissionTypeRequirementComponent))
