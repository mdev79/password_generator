import React, { Fragment } from 'react';

const GenerateBtn = props => (
  <Fragment>
    <button className='pass__gen__btn'>{props.mainBtn}</button>
    <br />
    <span className='info'>{}</span>
  </Fragment>
);

export default GenerateBtn;
