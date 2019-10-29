import React from 'react'
const InputItem = (props) => {
  return(
  <label className='label' htmlFor='chars__number'>
</label>
<input
  className='input input__text'
  type='text'
  id='chars__number'
  name='charsNumber'
  placeholder='12'
/>)
}
export default InputItem