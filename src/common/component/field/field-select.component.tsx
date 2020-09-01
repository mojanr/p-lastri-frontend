import React, { memo, FunctionComponent, ReactNode } from 'react'
import { FormItemProps } from 'antd/lib/form'
import { InputProps } from 'antd/lib/input'
import { useFormContext, Controller } from 'react-hook-form'
import { Form, Input, Typography, Select } from 'antd'

interface FieldInputComponentProps extends FormItemProps, InputProps {
  name: string
  children?: string | ReactNode
  onReset?: () => void
}

const FieldInputComponent: FunctionComponent<FieldInputComponentProps> = ({
  name,
  label,
  defaultValue,
  placeholder,
  type = 'text',
  addonBefore,
  addonAfter,
  prefix,
  suffix,
  allowClear = true,
  maxLength = 200,
  minLength,
  autoComplete = "off"
}) => {
  // use form context
  const { register, control, errors } = useFormContext()

  return (
    <Form.Item
      label={label && <Typography.Text strong> {label} </Typography.Text>}
      validateStatus={errors[name]?.message && 'error'}
      help={errors[name]?.message}
    >
      <Controller
        as={
          <Select showSearch placeholder="Role">
            <Select.Option value="Admin">Demo</Select.Option>
            <Select.Option value="Verifikator">Demo</Select.Option>
            <Select.Option value="Helpdesk">Demo</Select.Option>
          </Select>
        }
        control={control}
        name={name}
        defaultValue={defaultValue}
      />
    </Form.Item>
  )
}

export default memo(FieldInputComponent)
