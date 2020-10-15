import React, { FunctionComponent, memo, useEffect, useState } from 'react'
import { Comment, Divider, Tag, Typography } from 'antd';
import { CardComponent } from 'common/component/index.component';
import { useServiceStore } from 'store/service/_index-service.store';
import { observer } from 'mobx-react';


const ExampleComment: FunctionComponent<{ children?: any, question: string, serviceName: string }> = ({ children, question, serviceName }) => (
  <div>
    <Comment
      // actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<Tag> {serviceName}  </Tag>}
      // avatar={
      //   <Avatar
      //     src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      //     alt="Han Solo"
      //   />
      // }
      content={
        <Typography.Text strong>
          {question}
        </Typography.Text>
      }
    >
      {children}
    </Comment>
    <Divider />
  </div>
);


const ListQuestionComponent: FunctionComponent = () => {

  // use service store
  const { authStore, qnaStore } = useServiceStore()
  const [user, setUser] = useState<any>()

  // use effect
  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const user = `${await authStore.getUser()}`
    const parse = JSON.parse(user)
    setUser(parse)
    qnaStore.fetchQuestionByUserId(parse?.id)
    console.log(parse)
  }

  return (
    <CardComponent>
      {qnaStore.questionUser.map((item: any, index) => (
        <ExampleComment key={`qna-${index}`} question={item.question} serviceName={item?.service?.name}>
          {item.answer ? <p> {item.answer} </p> : <p> Menunggu jawaban </p>}
        </ExampleComment>
      ))}

      {/* <ExampleComment>
        <p> Jawaban </p>
      </ExampleComment>
      <ExampleComment>
        <p> Jawaban </p>
      </ExampleComment> */}
    </CardComponent>
  )
}

export default memo(observer(ListQuestionComponent))
