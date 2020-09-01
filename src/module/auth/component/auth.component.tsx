import React, { memo, FunctionComponent, ReactNode } from 'react'
import styled from "styled-components";

interface AuthComponentProps {
  children: string | ReactNode
}

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AuthContent = styled.div`
  width: 400px;
  padding: 24px;

  @media (max-width: 375px) {
    width: 100%;
  }
`

const AuthComponent: FunctionComponent<AuthComponentProps> = ({ children }) => {
  return (
    <AuthContainer>
      <AuthContent>
        {children}
      </AuthContent>
    </AuthContainer>
  )
}

export default memo(AuthComponent)
