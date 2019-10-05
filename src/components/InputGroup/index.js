import React from 'react';

const InputGroup = ({
  field,
  label,
  value,
  onChange,
  className,
  type = 'text'
}) => {
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
        checked={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
