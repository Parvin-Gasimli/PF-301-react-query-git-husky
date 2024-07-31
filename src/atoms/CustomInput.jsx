import React from 'react';

const CustomInput = ({ placeholder, name, type, value, onChange, formik, ...props }) => {
  const isTouched = formik?.touched[name];
  const errorMessage = formik?.errors[name];
  return (
    <div>
      <input
        {...props}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder || 'enter the name'}
        className={isTouched && errorMessage ? 'input-error' : 'base_input'}
      />
      {isTouched && errorMessage ? <div className="error">{errorMessage}</div> : null}
    </div>
  );
};

export default CustomInput;
