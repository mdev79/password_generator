import React, { Component } from 'react';
import GenerateBtn from './GenerateBtn';
import OptionsContainer from './options/OptionsContainer';
import CopyToClipBtn from './CopyToClipBtn';
import PassArea from './PassArea';

import PropTypes from 'prop-types';
// ! important
// ! important
// ! important
// ! important
// ! important
// TODO make more elegant structure of an pass generating engine
// ! important
// ! important
// ! important
// ! important
// ! important

class MainContainer extends Component {
  state = {
    checkboxOn: ['smallLetters', 'bigLetters', 'numbers', 'specialChars'],
    data: [],
    charsNumber: '12',
    //  ! uwaga - po daniu setstate dla takiego obiektu trzeba przepisywać cały obiekt bo wywala 'data;
    smallLetters: {
      on: true,
      data: 'abcdefghijklmnopqrstuvwxyz'
    },
    bigLetters: {
      on: true,
      data: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    },
    numbers: {
      on: true,
      data: '1234567890'
    },
    specialChars: {
      on: true,
      data: "!@#$%^&*(),./?';:{}[]=+-_§£~"
    },
    password: 'coś tam'
    // errors settings
  };

  componentDidMount = () => {
    const { smallLetters, bigLetters, numbers, specialChars } = this.state;
    this.setState({
      data: [
        ...smallLetters.data,
        ...bigLetters.data,
        ...numbers.data,
        ...specialChars.data
      ]
    });
  };

  generatePassword = e => {
    console.log(this.state.data);
  };

  findIfIsTrue = el => {
    el === true ? console.log('prawda') : console.log('nieprawda');
  };
  getCheckboxData = e => {
    const name = e.target.name;
    const checked = e.target.checked;
    //  ! uwaga - po daniu setstate dla takiego obiektu trzeba przepisywać cały obiekt bo wywala 'data;
    this.setState({
      [name]: {
        on: checked
      }
    });
    console.log(this.state[name]);
  };

  getCharsNumber = e => {
    const value = e.target.value;
    this.setState({
      charsNumber: value
    });
  };

  getData = () => {};
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
