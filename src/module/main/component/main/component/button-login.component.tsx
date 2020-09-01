import React, { memo, FunctionComponent } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const ButtonLoginComponent: FunctionComponent = () => {
  return (
    <Button type="default">
      <Link to="/"> Login </Link>
    </Button>
  )
}

export default memo(ButtonLoginComponent)
