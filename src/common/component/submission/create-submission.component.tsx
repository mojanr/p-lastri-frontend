import React, { FunctionComponent, memo } from 'react'
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

// interface props
interface CreateSubmissionComponent {
  onCreate: () => void
}

const CreateSubmissionComponent: FunctionComponent<CreateSubmissionComponent> = ({ onCreate }) => {
  return (
    <CreateSubmission>
      <CreateSubmissionContainer>
        <Form.Item>
          <Empty description={<Typography.Text strong> Sedang tidak ada pengajuan yang aktif </Typography.Text>} />
        </Form.Item>
        <Button type="primary" onClick={onCreate}> Buat Pengajuan </Button>
      </CreateSubmissionContainer>
    </CreateSubmission>
  )
}

export default memo(CreateSubmissionComponent)
