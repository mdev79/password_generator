import React, { Component } from 'react';

import ToEngBtn from './ToEngBtn';
import ToPlBtn from './ToPlBtn';

const SideContainer = props => {
  const { changeLang } = props;
  return (
    <div className='side__panel'>
      <ToEngBtn changeLang={changeLang} />
      <div className='spacer spacer__side'> | </div>
      <ToPlBtn changeLang={changeLang} />
    </div>
  );
};
export default SideContainer;
