import React from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { Controller, useFormContext } from 'react-hook-form';

const RHFInput = ({
  containerStyles,
  name,
  ...inputProps
}) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <div className={`form_group ${error ? 'input-error' : ''}`}>
            <input {...inputProps} onChange={onChange} value={value} />
            <ErrorMessage text={error?.message} />
          </div>
        )
      }}
      rules={{
        required: {
          value: true,
          message: name + ` is required`
        },
      }}
    />
  )
}

export default RHFInput