import React from 'react';

const OptionsContainer = props => {
  return (
    <div className='options__container'>
      <div className='options'></div>
      <form>
        <label className='label' htmlFor='chars__number'>
          {}
        </label>
        <input
          className='input input__text'
          type='text'
          id='chars__number'
          name='charsNumber'
          placeholder='12'
        />
        <br />
        <span className='info'></span>
        <label className='label' htmlFor='small__letters'>
          {}
        </label>
        <input
          className='input input__checkbox'
          type='checkbox'
          id='small__letters'
          name='smallLetters'
        />
        <label className='label' htmlFor='big__letters'>
          {}
        </label>
        <input
          className='input input__checkbox'
          type='checkbox'
          id='big__letters'
          name='bigLetters'
        />
        <label className='label' htmlFor='numbers'>
          {}
        </label>
        <input
          className='input input__checkbox'
          type='checkbox'
          id='numbers'
          name='numbers'
        />
        <label className='label' htmlFor='special__chars'>
          {}
        </label>
        <input
          className='input input__checkbox'
          type='checkbox'
          id='special__chars'
          name='specialChars'
        />
      </form>
    </div>
  );
};
export default Options;
