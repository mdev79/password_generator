import React from 'react';
import GenerateBtn from './GenerateBtn';
import OptionsContainer from './options/OptionsContainer';
import CopyToClipBtn from './CopyToClipBtn';
import PassArea from './PassArea';

import PropTypes from 'prop-types';

const MainContainer = props => {
  return (
    <div className='main__container'>
      <GenerateBtn mainBtn={props.mainBtn} />
      <OptionsContainer {...props} />
      <PassArea password={props.password} />
      <CopyToClipBtn copyToClipboard={props.copyToClipboard} />
    </div>
  );
};
MainContainer.propTypes = {};
export default MainContainer;

//  previous version of props in component:

// const {
//   options,
//   howManyChars,
//   smallLetters,
//   bigLetters,
//   numbers,
//   specialChars
// } = props;

// <OptionsContainer options={options} howManyChars={howManyChars} smallLetters={smallLetters} bigLetters={bigLetters} numbers={numbers} specialChars={specialChars} />
