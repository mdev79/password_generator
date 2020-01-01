import React, { Fragment } from 'react';

const GenerateBtn = props => {
  const { getPassword, mainBtn, errorMessage } = props;
  return (
    <Fragment>
      <button
        className='btn btn__blue pass__gen__btn active--btn'
        onClick={getPassword}
      >
        {mainBtn}
      </button>
      <br />
      <span className='info'>{errorMessage}</span>
    </Fragment>
  );
};

export default GenerateBtn;
