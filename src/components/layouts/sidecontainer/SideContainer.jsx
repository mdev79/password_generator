import React, { Component } from 'react';

import ToEngBtn from './ToEngBtn';
import ToPlBtn from './ToPlBtn';

const SideContainer = props => {
  return (
    <div className='side__panel'>
      <ToEngBtn />
      <div className='spacer spacer__side'> | </div>
      <ToPlBtn />
    </div>
  );
};
export default SideContainer;
