import React from 'react'

export const Input = ({
  label,
  type,
  name,
  id,
  placeholder,
  required,
  pattern,
  errorMessage,
}) => {
  return (
    <label className="input-wrapper" htmlFor={id}>
      {label}
      <input
        required={required}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        pattern={pattern}
      />
      {errorMessage && <span id="error-message">{errorMessage}</span>}
    </label>
  );
};
