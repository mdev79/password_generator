import React from 'react';
import GenerateBtn from './GenerateBtn';
import OptionsContainer from './options/OptionsContainer';

const MainContainer = props => {
  return (
    <div className='main__container'>
      <GenerateBtn mainBtn={props.mainBtn} />
      <OptionsContainer {...props} />
    </div>
  );
};

export default MainContainer;

//  previous version of props in component:

// const {
//   options,
//   howManyChars,
//   smallLetters,
//   bigLetters,
//   numbers,
//   specialChars
// } = props;

// <OptionsContainer options={options} howManyChars={howManyChars} smallLetters={smallLetters} bigLetters={bigLetters} numbers={numbers} specialChars={specialChars} />
