import React from 'react';
import GenerateBtn from './GenerateBtn';
import OptionsContainer from './options/OptionsContainer';

const MainContainer = props => {
  console.log(props);
  return (
    <div className='main__container'>
      <GenerateBtn />
      <OptionsContainer lang={props.lang} />
    </div>
  );
};

export default MainContainer;
