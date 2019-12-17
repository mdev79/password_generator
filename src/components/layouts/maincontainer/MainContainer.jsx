import React, { Component } from 'react';
import GenerateBtn from './GenerateBtn';
import OptionsContainer from './options/OptionsContainer';
import CopyToClipBtn from './CopyToClipBtn';
import PassArea from './PassArea';
import PropTypes from 'prop-types';

class MainContainer extends Component {
  state = {
    checkboxOn: ['smallLetters', 'bigLetters', 'numbers', 'specialChars'],
    // prettier-ignore
    data: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*(),./?';:{}[]=+-_§£~",
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
    password: 'coś tam',
    // errors settings
    errorMessage: 'silne'
  };

  componentDidMount = () => {
    const {
      smallLetters,
      bigLetters,
      numbers,
      specialChars
    } = this.state.source;
    this.setState({
      data: `${smallLetters}${bigLetters}${numbers}${specialChars}`
    });
  };

  getCheckboxData = e => {
    const { checkboxOn, source } = this.state;
    const name = e.target.name;
    const checked = e.target.checked;
    let tempData = '';
    let tempCheckboxArray = checkboxOn;

    checkboxOn.includes(`${name}`) && this.state[name]
      ? (tempCheckboxArray = tempCheckboxArray.filter(el => el !== `${name}`))
      : (tempCheckboxArray = [...tempCheckboxArray, `${name}`]);
    tempCheckboxArray.forEach(el => (tempData += source[el]));
    this.setState({
      //  prettier-ignore
      checkboxOn: (
        checkboxOn.includes(`${name}`) && this.state[name]
          ? checkboxOn.filter(el => el !== `${name}`)
          : [...checkboxOn, `${name}`]
          ),
      [name]: checked,
      data: tempData
    });
  };

  handleValidate = () => {
    const { checkboxOn, charsNumber } = this.state;
    const {
      lettersCharsErrorLang,
      weakLang,
      mediumLang,
      strongLang,
      veryStrongLang,
      errorCheckboxLang,
      numberCharsErrorMinLang,
      numberCharsErrorMaxLang
    } = this.props;
    let errorMessage = '';
    if (isNaN(charsNumber)) {
      errorMessage = lettersCharsErrorLang;
    } else {
      if (charsNumber >= 4 && charsNumber <= 64 && checkboxOn.length > 0) {
        if (
          charsNumber <= 6 ||
          (!checkboxOn.includes('numbers') &&
            !checkboxOn.includes('specialChars'))
        ) {
          errorMessage = weakLang;
        } else if (
          charsNumber <= 8 ||
          !checkboxOn.includes('numbers') ||
          !checkboxOn.includes('specialChars')
        ) {
          errorMessage = mediumLang;
        } else if (
          charsNumber > 8 &&
          charsNumber < 12 &&
          checkboxOn.length === 4
        ) {
          errorMessage = strongLang;
        } else if (charsNumber >= 12 && checkboxOn.length === 4) {
          errorMessage = veryStrongLang;
        }
      } else if (
        checkboxOn.length === 0 &&
        charsNumber >= 4 &&
        charsNumber <= 64
      ) {
        errorMessage = errorCheckboxLang;
      } else if (checkboxOn.length === 0 && charsNumber < 4) {
        errorMessage = `${errorCheckboxLang}, ${numberCharsErrorMinLang}`;
      } else if (checkboxOn.length === 0 && charsNumber > 64) {
        errorMessage = `${errorCheckboxLang}, ${numberCharsErrorMaxLang}`;
      } else if (checkboxOn.length > 0 && charsNumber < 4) {
        errorMessage = numberCharsErrorMinLang;
      } else if (checkboxOn.length > 0 && charsNumber > 64) {
        errorMessage = numberCharsErrorMaxLang;
      }
    }
    return errorMessage;
  };

  getPassword = () => {
    const { charsNumber, data } = this.state;
    let password = '';
    for (let i = 0; i < charsNumber; i++) {
      const char = Math.floor(Math.random() * data.length);
      password += data[char];
    }
    console.log(password);
    const errorMessage = this.handleValidate();
    console.log(errorMessage);
    this.setState({
      password,
      errorMessage
    });
  };
  //
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
          errorMessage={this.state.errorMessage}
          generatePassword={this.getPassword}
          {...this.props}
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
