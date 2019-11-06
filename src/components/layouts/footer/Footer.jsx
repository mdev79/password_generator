import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='powered'>
        Powered by <a href='#'>React</a>
      </div>
      <div className='spacer spacer__footer'> | </div>
      <div className='copy'>
        &copy;{' '}
        <a href='#' className='btn'>
          Dev79
        </a>
      </div>
    </footer>
  );
};
export default Footer;
