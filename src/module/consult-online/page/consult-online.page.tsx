import React, { memo, FunctionComponent } from 'react'
import { PageTransitionComponent, HeaderComponent } from 'common/component/index.component'
import styled from 'styled-components'
import { Button, Empty, Typography, Space, Form } from 'antd'
import FormConsultOnlineComponent from '../component/form-consult-online.component'
import ListQuestionComponent from '../component/list-question.component'

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

const ConsultOnlinePage: FunctionComponent = () => {
  return (
    <PageTransitionComponent direction="horizontal">
      <HeaderComponent title="Konsultasi Online" />

      <FormConsultOnlineComponent />

      <ListQuestionComponent />
      {/* <CreateSubmission>
        <CreateSubmissionContainer>
          <Form.Item>
            <Empty description={<Typography.Text strong> Sedang tidak ada pengajuan yang aktif </Typography.Text>} />
          </Form.Item>
          <Button type="primary"> Buat Pengajuan </Button>
        </CreateSubmissionContainer>
      </CreateSubmission> */}
    </PageTransitionComponent>
  )
}

export default memo(ConsultOnlinePage)
