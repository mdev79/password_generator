import React, { Fragment } from 'react';

const GenerateBtn = props => (
  <Fragment>
    <button className='pass__gen__btn'>generuj hasło</button>
    <br />
    <span className='info'>{}</span>
  </Fragment>
);

export default PassGenBtn;
