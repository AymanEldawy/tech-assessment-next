import React, { useState, useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import 'react-phone-number-input/style.css';
import styles from './InputPhone.module.scss';

const RHFInputPhone = ({ name = 'phone', inputPhoneProps }) => {
  const { control } = useFormContext();
  const [country, setCountry] = useState('US');

  const InputComponent = useCallback(({ ref, ...props }) => (
    <input
      ref={ref}
      {...props}
      className={styles.input}
      placeholder='phone'
    />
  ), []);

  const CountrySelectComponent = useCallback(({ options, onChange, value, ...countryProps }) => (
    <select
      className={styles.phone_options}
      {...countryProps}
      value={value}
      onChange={(e) => {
        onChange(e.target.value || undefined);
        setCountry(e.target.value || 'US');
      }}
    >
      {options?.map(option => (
        <option key={option?.value} value={option.value}>
          +{getCountryCallingCode(option.value || 'US')}
        </option>
      ))}
    </select>
  ), []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div className={`${styles.input_phone_container} ${error ? 'input-error' : ''}`}>
          <PhoneInput
            international
            defaultCountry={country}
            value={value}
            onChange={onChange}
            onCountryChange={setCountry}
            className={styles.input_phone}
            // inputComponent={InputComponent}
            // countrySelectComponent={CountrySelectComponent}
            placeholder="Phone"
            {...inputPhoneProps}
          />
          <ErrorMessage text={error?.message} />
        </div>
      )}
      rules={{
        required: {
          value: true,
          message: name + ` is required`
        },
      }}
    />
  );
};

export default RHFInputPhone;