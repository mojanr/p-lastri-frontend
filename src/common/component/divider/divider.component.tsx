import { memo } from 'react'
import styled from 'styled-components'
import { STYLE } from 'config/style.config'

interface DividerComponentProps {
  color?: string
}

const DividerComponent = styled.div<DividerComponentProps>`
  width: 100px;
  height: 4px;
  border-radius: 3px;
  background-color: ${({ color }) => color ? color : STYLE.COLOR.PRIMARY};
`

export default memo(DividerComponent)
