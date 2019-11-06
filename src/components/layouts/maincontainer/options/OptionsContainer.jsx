import React from 'react';
import InputItem from './InputItem';
const OptionsContainer = props => {
  const {
    options,
    howManyChars,
    smallLetters,
    bigLetters,
    numbers,
    specialChars
  } = props;
  return (
    <div className='options__container'>
      <div className='options'>{options}</div>
      <form>
        <InputItem
          type='text'
          key='howManyChars'
          name='howManyChars'
          id='how__many__chars'
          placeholder='12'
          className='input input__text how__many__chars__c'
          label={howManyChars}
        />
        <InputItem
          type='checkbox'
          key='smallLetters'
          name='smallLetters'
          id='small__letters'
          className='input input__text small__letters__c'
          label={smallLetters}
        />
        <InputItem
          type='checkbox'
          key='bigLetters'
          name='bigLetters'
          id='big__letters'
          classNme='input input__text big__letters__c '
          label={bigLetters}
        />
        <InputItem
          type='checkbox'
          key='numbers'
          name='numbers'
          id='numbers'
          className='input input__text numbers__c'
          label={numbers}
        />
        <InputItem
          type='checkbox'
          key='specialChars'
          name='specialChars'
          id='special__chars'
          className='input input__text special__chars__c'
          label={specialChars}
        />
      </form>
    </div>
  );
};
export default OptionsContainer;
