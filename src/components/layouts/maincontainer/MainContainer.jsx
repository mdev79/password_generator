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
    errorMessage: 'bardzo silne'
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

  handleValidate = (checkboxOn, charsNumber) => {
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
        if (charsNumber <= 6 || checkboxOn.length < 3) {
          errorMessage = weakLang;
        } else if (
          (charsNumber <= 8 && checkboxOn.length > 2) ||
          (charsNumber > 8 && checkboxOn.length === 3)
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
    const btn = document.querySelector('.pass__gen__btn');
    if ([...btn.classList].includes('active--btn')) {
      for (let i = 0; i < charsNumber; i++) {
        const char = Math.floor(Math.random() * data.length);
        password += data[char];
      }
      console.log(password);
      const passArea = document.querySelector('.pass__container');
      password.length > 32
        ? passArea.classList.add('small--letters')
        : passArea.classList.remove('small--letters');
      const copyBtn = document.querySelector('.btn__copy');
      if (!copyBtn.classList.contains('visible--btn')) {
        console.log('pokazuje się');
        copyBtn.classList.add('visible--btn');
      }
      this.setState({
        password
      });
    }
  };

  getCharsNumber = e => {
    const { checkboxOn } = this.state;
    const value = e.target.value * 1;
    const errorMessage = this.handleValidate(checkboxOn, value);
    this.setState({
      charsNumber: !isNaN(value) != 0 ? value : 0,
      errorMessage
    });
    const btn = document.querySelector('.pass__gen__btn');
    value >= 4 && value <= 64 && checkboxOn.length > 0
      ? btn.classList.add('active--btn')
      : btn.classList.remove('active--btn');
  };

  getCheckboxData = e => {
    const { checkboxOn, source, charsNumber } = this.state;
    const name = e.target.name;
    const checked = e.target.checked;
    let tempData = '';
    let tempCheckboxArray = checkboxOn;
    checkboxOn.includes(`${name}`) && this.state[name]
      ? (tempCheckboxArray = tempCheckboxArray.filter(el => el !== `${name}`))
      : (tempCheckboxArray = [...tempCheckboxArray, `${name}`]);
    tempCheckboxArray.forEach(el => (tempData += source[el]));
    const errorMessage = this.handleValidate(tempCheckboxArray, charsNumber);
    console.log(tempCheckboxArray.length);
    this.setState({
      //  prettier-ignore
      checkboxOn: (
        checkboxOn.includes(`${name}`) && this.state[name]
          ? checkboxOn.filter(el => el !== `${name}`)
          : [...checkboxOn, `${name}`]
          ),
      [name]: checked,
      errorMessage,
      data: tempData
    });
    const btn = document.querySelector('.pass__gen__btn');
    tempCheckboxArray.length > 0 && (charsNumber >= 4 && charsNumber <= 64)
      ? btn.classList.add('active--btn')
      : btn.classList.remove('active--btn');
  };

  copyPassword = () => {
    const pass = document.querySelector('.pass__container');
    const tempArea = document.createElement('textarea');
    pass.appendChild(tempArea);
    tempArea.textContent = pass.textContent;
    tempArea.select();
    document.execCommand('copy');
    pass.removeChild(tempArea);
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
        <PassArea password={this.state.password} />
        <CopyToClipBtn
          copyToClipboard={copyToClipboard}
          copyPassword={this.copyPassword}
        />
      </div>
    );
  }
}
MainContainer.propTypes = {};
export default MainContainer;
