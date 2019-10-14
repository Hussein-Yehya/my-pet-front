import React from 'react';

interface Props {
  field: string;
  label: string;
  value: string;
  className: string;
  type: 'text' | 'checkbox' | 'radio' | 'email' | 'password' | string;
  checked?: boolean;
  onChange: (e: any) => void;
}

const InputGroup = ({
  field,
  label,
  value,
  onChange,
  className,
  checked,
  type = 'text'
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
    </div>
  );
};

export default InputGroup;
