import React from 'react';
import InputItem from './InputItem';
const OptionsContainer = props => {
  const {
    options,
    howManyChars,
    smallLetters,
    bigLetters,
    numbers,
    specialChars,
    getCheckboxData,
    getCharsNumber
  } = props;
  return (
    <div className='options__container'>
      <div className='options'>{options}</div>
      <form>
        <InputItem
          type='text'
          name='howManyCharsOn'
          id='how__many__chars'
          placeholder='12'
          className='input input__text how__many__chars__c'
          label={howManyChars}
          getCharsNumber={getCharsNumber}
        />
        <InputItem
          type='checkbox'
          name='smallLettersOn'
          id='small__letters'
          className='input input__text small__letters__c'
          label={smallLetters}
          getCheckboxData={getCheckboxData}
        />
        <InputItem
          type='checkbox'
          name='bigLettersOn'
          id='big__letters'
          classNme='input input__text big__letters__c '
          label={bigLetters}
          getCheckboxData={getCheckboxData}
        />
        <InputItem
          type='checkbox'
          name='numbersOn'
          id='numbers'
          className='input input__text numbers__c'
          label={numbers}
          getCheckboxData={getCheckboxData}
        />
        <InputItem
          type='checkbox'
          name='specialCharsOn'
          id='special__chars'
          className='input input__text special__chars__c'
          label={specialChars}
          getCheckboxData={getCheckboxData}
        />
      </form>
    </div>
  );
};
export default OptionsContainer;
