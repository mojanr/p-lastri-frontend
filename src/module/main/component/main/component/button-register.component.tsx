import React, { memo, FunctionComponent } from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const ButtonRegisterComponent: FunctionComponent = () => {
  return (
    <Button type="primary">
      <Link to="/register"> Pendaftaran </Link>
    </Button>
  )
}

export default memo(ButtonRegisterComponent)
