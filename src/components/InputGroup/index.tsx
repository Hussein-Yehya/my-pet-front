import React, { useState, useEffect } from 'react';

interface Props {
  field: string;
  label: string;
  value: string;
  className: string;
  type: 'text' | 'checkbox' | 'radio' | 'email' | 'password' | string;
  checked?: boolean;
  errorMessage?: string;
  onChange: (e: any) => void;
  isValid?: boolean;
}

const componentClassName = 'c-input-group';

const ValidationField = ({ message = '', isValid = true }) => {
  if (isValid) {
    return <></>;
  }

  return (
    <span className={`${componentClassName}__error-message`}> {message} </span>
  );
};

const InputGroup = ({
  field,
  label,
  value,
  onChange,
  className,
  checked,
  type = 'text',
  errorMessage,
  isValid = true
}: Props) => {
  return (
    <div className={`form-field ${className}`}>
      <label className="label" htmlFor={field}>
        {label}
      </label>

      <input
        className="input-text js-input"
        name={field}
        type={type}
        value={value}
        checked={checked}
        onChange={onChange}
      />

      <ValidationField isValid={isValid} message={errorMessage} />
    </div>
  );
};

export default InputGroup;
