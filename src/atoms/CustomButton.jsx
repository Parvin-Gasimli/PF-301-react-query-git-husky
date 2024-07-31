import React from 'react';
import clsx from 'clsx';

import ButtonLoading from './ButtonLoading';

const CustomButton = ({ children, title, disabled, onClick, loading, className, ...props }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={clsx('default_button', className)}>
      {loading ? <ButtonLoading /> : children ? children : title}
    </button>
  );
};

export default CustomButton;
