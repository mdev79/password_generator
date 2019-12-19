import React from 'react';
import PropTypes from 'prop-types';

const CopyToClipBtn = props => {
  const { copyToClipboard, copyPassword } = props;
  return (
    <button className='btn blue__btn btn__copy' onClick={copyPassword}>
      {copyToClipboard}
    </button>
  );
};

CopyToClipBtn.propTypes = {};

export default CopyToClipBtn;
