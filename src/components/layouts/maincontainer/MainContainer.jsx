import React, { Component } from 'react';
import GenerateBtn from './GenerateBtn';
import OptionsContainer from './options/OptionsContainer';
import CopyToClipBtn from './CopyToClipBtn';
import PassArea from './PassArea';

import PropTypes from 'prop-types';

class MainContainer extends Component {
  state = {
    // password settings
    password: 'coś tam',
    charsNumber: '12',
    smallLettersOn: true,
    bigLettersOn: true,
    numbersOn: true,
    specialCharsOn: true
    // errors settings
  };
  generatePassword = e => {
    console.log('warczajet');
  };
  render() {
    const { mainBtn, password, copyToClipboard } = this.props;
    return (
      <div className='main__container'>
        <GenerateBtn
          mainBtn={mainBtn}
          generatePassword={this.generatePassword}
        />
        <OptionsContainer {...this.props} />
        <PassArea password={password} />
        <CopyToClipBtn copyToClipboard={copyToClipboard} />
      </div>
    );
  }
}
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
