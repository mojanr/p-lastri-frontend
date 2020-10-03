import React, { memo, FunctionComponent, ReactNode } from 'react'
import { FormItemProps } from 'antd/lib/form'
import { InputProps } from 'antd/lib/input'
import { useFormContext, Controller } from 'react-hook-form'
import { Form, Input, Typography } from 'antd'

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
  autoComplete = "off",
  required,
  style
}) => {
  // use form context
  const { register, control, errors } = useFormContext()

  return (
    <Form.Item
      label={label && <Typography.Text strong> {required && <span style={{ color: 'red' }}>*</span>} {label} </Typography.Text>}
      validateStatus={errors[name]?.message && 'error'}
      help={errors[name]?.message}
    >
      <Controller
        as={
          <Input
            type={type}
            addonBefore={addonBefore}
            addonAfter={addonAfter}
            prefix={prefix}
            suffix={suffix}
            allowClear={allowClear}
            placeholder={placeholder}
            autoComplete={autoComplete}
            maxLength={maxLength}
            minLength={minLength}
            style={style}
          />
        }
        control={control}
        name={name}
        defaultValue={defaultValue}
      />
    </Form.Item>
  )
}

export default memo(FieldInputComponent)
