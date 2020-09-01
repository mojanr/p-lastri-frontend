import React, { memo, FunctionComponent } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const ButtonLogoutComponent: FunctionComponent = () => {
  return (
    <Button type="default" shape="circle-outline">
      <Link to="/"> Login </Link>
    </Button>
  )
}

export default memo(ButtonLogoutComponent)
