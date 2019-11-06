import React from 'react';
import PropTypes from 'prop-types';

const CopyToClipBtn = props => {
  return (
    <button className='btn blue__btn btn__copy'>{props.copyToClipboard}</button>
  );
};

CopyToClipBtn.propTypes = {};

export default CopyToClipBtn;
