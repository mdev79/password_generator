import React from 'react';
import Lead from './Lead';
import MainImg from './MainImg';
import Number from './Number';
import Paragraph from './Paragraph';
import Title from './Title';

const ArticleContainer = () => {
  return (
    <div className='article__container'>
      <Title />
      <MainImg />
      <Lead />
      <div className='article__txt'>
        <Number />
        <Paragraph />
      </div>
    </div>
  );
};

export default ArticleContainer;
