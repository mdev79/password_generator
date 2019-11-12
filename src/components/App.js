import React, { Component } from 'react';
import '../style/App.css';
import Logo from './layouts/logo/Logo';
import MainContainer from './layouts/maincontainer/MainContainer';
import SideContainer from './layouts/sidecontainer/SideContainer';
import ArticleContainer from './layouts/article/ArticleContainer';
import Footer from './layouts/footer/Footer';
import FourOFour from './layouts/404/404';
import Cookie from './layouts/cookie/Cookie';

class App extends Component {
  state = {
    // lang settings
    urlToLangFile: 'lang/pl.json',
    lang: {}
  };

  componentDidMount() {
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
    const { password } = this.state;
    return (
      <div className='App'>
        <Logo />
        <MainContainer
          mainBtn={mainBtn}
          options={options}
          howManyChars={howManyChars}
          smallLetters={smallLetters}
          bigLetters={bigLetters}
          numbers={numbers}
          specialChars={specialChars}
          copyToClipboard={copyToClipboard}
          password={password}
        />
        <SideContainer guide={guide} />
        <ArticleContainer />
        <Footer />
        <Cookie />
      </div>
    );
  }
}

export default App;
