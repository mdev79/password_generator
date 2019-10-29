import React, { Component } from 'react';
import '../style/App.css';
import MainContainer from './layouts/maincontainer/MainContainer';

class App extends Component {
  state = {
    // lang settings
    currentLang: 'pl',
    urlToLangFile: 'data/lang/pl.json',
    lang: {}
  };

  componentWillMount() {
    const { urlToLangFile } = this.state;
    fetch(urlToLangFile)
      .then(res => res.json())
      .then(data =>
        this.setState({
          lang: data
        })
      );
  }

  render() {
    const {
      mainBtn,
      options,
      howManyChars,
      smallLetters,
      bigLetters,
      numbers,
      specialChars,
      copyToClipboard,
      guide,
      back,
      title,
      lead,
      paragraph,
      mainInfo,
      numberCharsErrorMin,
      numberCharsErrorMax,
      lettersCharsErrorMin,
      week,
      medium,
      strong,
      veryStrong,
      errorCheckbox,
      charsWarning
    } = this.state.lang;
    return (
      <div className='App'>
        <MainContainer
          mainBtn={mainBtn}
          options={options}
          howManyChars={howManyChars}
          smallLetters={smallLetters}
          bigLetters={bigLetters}
          numbers={numbers}
          specialChars={specialChars}
          copyToClipboard={copyToClipboard}
        />
      </div>
    );
  }
}

export default App;
