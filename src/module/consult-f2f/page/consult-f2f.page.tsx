import React, { memo, FunctionComponent } from 'react'
import { PageTransitionComponent, HeaderComponent } from 'common/component/index.component'
import styled from 'styled-components'
import { Button, Empty, Typography, Space, Form } from 'antd'

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

const ConsultF2FPage: FunctionComponent = () => {
  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Konsultasi Tatap Muka" />

      <CreateSubmission>
        <CreateSubmissionContainer>
          <Form.Item>
            <Empty description={<Typography.Text strong> Sedang tidak ada pengajuan yang aktif </Typography.Text>} />
          </Form.Item>
          <Button type="primary"> Buat Pengajuan </Button>
        </CreateSubmissionContainer>
      </CreateSubmission>
    </PageTransitionComponent>
  )
}

export default memo(ConsultF2FPage)
