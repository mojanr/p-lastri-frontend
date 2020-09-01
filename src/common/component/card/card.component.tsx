import React, { memo, FunctionComponent, ReactNode, CSSProperties } from 'react'
import { Card as AntCard } from 'antd'
import styled from 'styled-components'

type ElevationType = 'e100' | 'e200' | 'e300' | 'e400' | 'e500'

const Elevation = {
  e100: 'box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px;',
  e200: 'box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;',
  e300: 'box-shadow: rgba(9, 30, 66, 0.25) 0px 8px 16px -4px, rgba(9, 30, 66, 0.31) 0px 0px 1px;',
  e400: 'box-shadow: rgba(9, 30, 66, 0.25) 0px 12px 24px -6px, rgba(9, 30, 66, 0.31) 0px 0px 1px;',
  e500: 'box-shadow: rgba(9, 30, 66, 0.25) 0px 20px 32px -8px, rgba(9, 30, 66, 0.31) 0px 0px 1px;',
}

const Card = styled(AntCard) <{ elevation: ElevationType }>`
  ${({ elevation }) => Elevation[elevation]};
`

interface CardComponentProps {
  elevation?: ElevationType
  children: string | ReactNode
  style?: CSSProperties
  bodyStyle?: CSSProperties
  hoverable?: boolean
}

const CardComponent: FunctionComponent<CardComponentProps> = ({ elevation = 'e100', children, style, bodyStyle, hoverable = false }) => {
  return (
    <Card hoverable={hoverable} elevation={elevation} bordered={false} style={{ ...style }} bodyStyle={{ ...bodyStyle }}>
      {children}
    </Card>
  )
}

export default memo(CardComponent)
