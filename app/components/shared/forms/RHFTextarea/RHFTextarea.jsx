import React from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import styles from './RHFTextarea.module.scss';
import { Controller, useFormContext } from 'react-hook-form';

const RHFTextarea = ({
  containerStyles,
  name,
  ...inputProps
}) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div className='form_group'>
          <textarea {...inputProps} className={styles.textarea} onChange={onChange} value={value} />
          <ErrorMessage text={error?.message} />
        </div>
      )}
    />
  )
}

export default RHFTextarea
