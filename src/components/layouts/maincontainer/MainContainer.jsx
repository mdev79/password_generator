import React, { Component } from 'react';
import GenerateBtn from './GenerateBtn';
import OptionsContainer from './options/OptionsContainer';
import CopyToClipBtn from './CopyToClipBtn';
import PassArea from './PassArea';

import PropTypes from 'prop-types';

class MainContainer extends Component {
  state = {
    checkboxOn: ['smallLetters', 'bigLetters', 'numbers', 'specialChars'],
    data: [],
    source: {
      smallLetters: 'abcdefghijklmnopqrstuvwxyz',
      bigLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '1234567890',
      specialChars: "!@#$%^&*(),./?';:{}[]=+-_§£~"
    },
    charsNumber: '12',
    smallLetters: true,
    bigLetters: true,
    numbers: true,
    specialChars: true,
    password: 'coś tam'
    // errors settings
  };

  componentDidMount = () => {
    const {
      smallLetters,
      bigLetters,
      numbers,
      specialChars
    } = this.state.source;
    this.setState({
      data: [...smallLetters, ...bigLetters, ...numbers, ...specialChars]
    });
  };

  getData = name => {
    const { checkboxOn, source } = this.state;
    let tempCheckboxArray = checkboxOn;
    let tempDataArray = [];
    tempCheckboxArray = checkboxOn.filter(el => el !== `${name}`);
    console.log(tempCheckboxArray);
    tempDataArray = tempCheckboxArray.forEach(el =>
      tempDataArray.push(...source[el])
    );
    console.log(tempDataArray);
    return tempDataArray;
  };

  generatePassword = e => {
    this.getData();
  };

  getCheckboxData = e => {
    const { checkboxOn, source } = this.state;
    const name = e.target.name;
    const checked = e.target.checked;
    let tempDataArray = [];
    if (checkboxOn.includes(`${name}`) && this.state[name]) {
      tempDataArray = this.getData(name);

      this.setState({
        checkboxOn: checkboxOn.filter(el => el !== `${name}`),
        [name]: false
        // data: [...tempDataArray]
      });
    } else {
      tempDataArray = this.getData(name);

      this.setState({
        checkboxOn: [...checkboxOn, `${name}`],
        [name]: true
        // data: [...tempDataArray]
      });
    }
  };

  getCharsNumber = e => {
    const value = e.target.value;
    this.setState({
      charsNumber: value
    });
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
