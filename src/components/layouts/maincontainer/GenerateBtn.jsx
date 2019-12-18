import React, { Fragment } from 'react';

const GenerateBtn = props => (
  <Fragment>
    <button
      className='btn btn__blue pass__gen__btn active--btn'
      onClick={props.generatePassword}
    >
      {props.mainBtn}
    </button>
    <br />
    <span className='info'>{props.errorMessage}</span>
  </Fragment>
);

export default GenerateBtn;
