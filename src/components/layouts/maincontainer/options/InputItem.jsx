import React, { Fragment } from 'react';
const InputItem = props => {
  const { type, name, placeholder, id, className, label } = props;
  return (
    <Fragment>
      <label className={className} htmlFor={id}>
        {label}
      </label>
      <input
        className={className}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </Fragment>
  );
};
export default InputItem;
