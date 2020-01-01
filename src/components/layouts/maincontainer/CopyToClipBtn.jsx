import React from 'react';
import PropTypes from 'prop-types';

const CopyToClipBtn = props => {
  const { copyToClipboardLang, copyPassword } = props;
  return (
    <button className='btn blue__btn btn__copy' onClick={copyPassword}>
      {copyToClipboardLang}
    </button>
  );
};

CopyToClipBtn.propTypes = {};

export default CopyToClipBtn;
