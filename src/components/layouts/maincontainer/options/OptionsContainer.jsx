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
          classNAme='input input__text howManyChars'
          label={howManyChars}
        />
        <InputItem
          type='checkbox'
          key='smallLetters'
          name='smallLetters'
          id='small__letters'
          classNAme='input input__text smallLetters'
          label={smallLetters}
        />
        <InputItem
          type='checkbox'
          key='bigLetters'
          name='bigLetters'
          id='big__letters'
          classNAme='input input__text bigLetters'
          label={bigLetters}
        />
        <InputItem
          type='checkbox'
          key='numbers'
          name='numbers'
          id='numbers'
          classNAme='input input__text '
          label={numbers}
        />
        <InputItem
          type='checkbox'
          key='specialChars'
          name='specialChars'
          id='special__chars'
          classNAme='input input__text specialChars'
          label={specialChars}
        />
      </form>
    </div>
  );
};
export default OptionsContainer;
