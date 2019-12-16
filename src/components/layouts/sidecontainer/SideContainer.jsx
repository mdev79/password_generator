import React, { Component } from 'react';
import GuideBtn from './GuideBtn';
import ToEngBtn from './ToEngBtn';
import ToPlBtn from './ToPlBtn';

const SideContainer = props => {
  return (
    <div className='side__panel'>
      <GuideBtn guide={props.guide} />
      <div className='spacer spacer__side'> | </div>
      <ToEngBtn />
      <div className='spacer spacer__side'> | </div>
      <ToPlBtn />
    </div>
  );
};
export default SideContainer;
