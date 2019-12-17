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
    const checked = e.target.checked;
    let tempData = '';
    let tempCheckboxArray = checkboxOn;

    checkboxOn.includes(`${name}`) && this.state[name]
      ? (tempCheckboxArray = tempCheckboxArray.filter(el => el !== `${name}`))
      : (tempCheckboxArray = [...tempCheckboxArray, `${name}`]);
    tempCheckboxArray.forEach(el => (tempData += source[el]));
    this.setState({
      // prettier-ignore
      checkboxOn: (
        checkboxOn.includes(`${name}`) && this.state[name]
          ? checkboxOn.filter(el => el !== `${name}`)
          : [...checkboxOn, `${name}`]
          ),
      [name]: checked,
      data: tempData
    });
  };

  getPassword = () => {
    const { charsNumber, data } = this.state;
    let password = '';
    for (let i = 0; i < charsNumber; i++) {
      const char = Math.floor(Math.random() * data.length);
      password += data[char];
    }
    console.log(password);
    this.setState({
      password: password
    });
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
        <GenerateBtn mainBtn={mainBtn} generatePassword={this.getPassword} />
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
