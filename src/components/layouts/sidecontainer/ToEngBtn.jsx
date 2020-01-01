import React from 'react';

const ToEngBtn = props => {
  const { changeLang } = props;
  return (
    <button
      className='btn lang__btn to__eng__btn'
      onClick={() => props.changeLang('eng')}
    >
      ENG
    </button>
  );
};
export default ToEngBtn;
