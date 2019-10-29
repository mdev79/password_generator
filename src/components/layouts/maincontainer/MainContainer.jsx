import React from 'react';
import GenerateBtn from './GenerateBtn';
import OptionsContainer from './options/OptionsContainer';

const MainContainer = props => {
  const {options,
    howManyChars,
    smallLetters,
    bigLetters,
    numbers,
    specialChars,} = props
  return (
    <div className='main__container'>
      <GenerateBtn mainBtn={props.mainBtn} />
      <OptionsContainer options={options} howManyChars={howManyChars} smallLetters={smallLetters} bigLetters={bigLetters} numbers={numbers} specialChars={specialChars} />
    </div>
  );
};

export default MainContainer;
