import React, { Component } from 'react';
import GenerateBtn from './GenerateBtn';
import OptionsContainer from './options/OptionsContainer';
import CopyToClipBtn from './CopyToClipBtn';
import PassArea from './PassArea';

import PropTypes from 'prop-types';

class MainContainer extends Component {
  state = {
    // password settings
    source: {
      smallLettersData: 'abcdefghijklmnopqrstuvwxyz',
      bigLettersData: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbersData: '1234567890',
      specialCharsData: "!@#$%^&*(),./?';:{}[]=+-_§£~"
    },
    data: [],
    charsNumberOn: '12',
    smallLettersOn: true,
    bigLettersOn: true,
    numbersOn: true,
    specialCharsOn: true,
    password: 'coś tam'

    // errors settings
  };
  componentDidMount = () => {
    const { source } = this.state;
    this.setState({
      data: [
        ...source.smallLettersData,
        ...source.bigLettersData,
        ...source.numbersData,
        ...source.specialCharsData
      ]
    });
  };

  generatePassword = e => {
    console.log(this.state.data);
  };

  getCheckboxData = e => {
    const name = e.target.name;
    const checked = e.target.checked;
    this.setState({
      [name]: checked
    });
  };

  getCharsNumber = e => {
    const value = e.target.value;
    this.setState({
      charsNumber: value
    });
  };

  getData = () => {
    //
  };
  render() {
    const { mainBtn, password, copyToClipboard } = this.props;
    return (
      <div className='main__container'>
        <GenerateBtn
          mainBtn={mainBtn}
          generatePassword={this.generatePassword}
        />
        <OptionsContainer
          getCheckboxData={this.getCheckboxData}
          getCharsNumber={this.getCharsNumber}
          {...this.props}
        />
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
