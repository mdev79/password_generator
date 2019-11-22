import React, { Component } from 'react';
import GenerateBtn from './GenerateBtn';
import OptionsContainer from './options/OptionsContainer';
import CopyToClipBtn from './CopyToClipBtn';
import PassArea from './PassArea';
import PropTypes from 'prop-types';

class MainContainer extends Component {
  state = {
    checkboxOn: ['smallLetters', 'bigLetters', 'numbers', 'specialChars'],
    data: '',
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
      data: `${smallLetters}${bigLetters}${numbers}${specialChars}`
    });
  };

  getCheckboxData = e => {
    const { checkboxOn, source } = this.state;
    const name = e.target.name;
    // const checked = e.target.checked;
    let tempData = '';
    let tempCheckboxArray = checkboxOn;
    if (checkboxOn.includes(`${name}`) && this.state[name]) {
      tempCheckboxArray = tempCheckboxArray.filter(el => el !== `${name}`);
      tempCheckboxArray.forEach(el => (tempData += source[el]));
      this.setState({
        checkboxOn: checkboxOn.filter(el => el !== `${name}`),
        [name]: false,
        data: tempData
      });
    } else {
      tempCheckboxArray = [...tempCheckboxArray, `${name}`];
      tempCheckboxArray.forEach(el => (tempData += source[el]));
      this.setState({
        checkboxOn: [...checkboxOn, `${name}`],
        [name]: true,
        data: tempData
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
