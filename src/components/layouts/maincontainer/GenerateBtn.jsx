import React, { Fragment } from 'react';

const GenerateBtn = props => (
  <Fragment>
    <button
      className='btn btn__blue pass__gen__btn'
      onClick={props.generatePassword}
    >
      {props.mainBtn}
    </button>
    <br />
    <span className='info'>{}</span>
  </Fragment>
);

export default GenerateBtn;
