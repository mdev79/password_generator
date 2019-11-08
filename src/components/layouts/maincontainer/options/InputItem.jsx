import React, { Fragment } from 'react';
const InputItem = props => {
  const {
    type,
    name,
    placeholder,
    id,
    className,
    label,
    getCheckboxData,
    getCharsNumber
  } = props;
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
        onClick={getCheckboxData}
        onChange={getCharsNumber}
        defaultChecked
      />
    </Fragment>
  );
};
export default InputItem;
