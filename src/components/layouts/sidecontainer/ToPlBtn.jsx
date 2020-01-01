import React from 'react';
const ToPlBtn = props => {
  return (
    <button
      className='btn lang__btn to__pl__btn'
      onClick={() => props.changeLang('pl')}
    >
      PL
    </button>
  );
};
export default ToPlBtn;
