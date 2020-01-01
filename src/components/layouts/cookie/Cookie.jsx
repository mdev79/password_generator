import React from 'react';

const Cookie = props => {
  const { closePopUp, handleCookie } = props;
  return (
    <div className='cookie__info'>
      <button className='close__btn btn' onClick={closePopUp}>
        x
      </button>
      <p className='cookie__paragraph'>
        Ta strona nie korzysta z plików cookies w żadnym innym celu niż po to by
        wyświetlić Ci tę wiadomość. Zamknij to okienko a komunikat więcej się
        nie pojawi.
      </p>
    </div>
  );
};

export default Cookie;
