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
      mainBtnLang,
      optionsLang,
      howManyCharsLang,
      smallLettersLang,
      bigLettersLang,
      numbersLang,
      specialCharsLang,
      copyToClipboardLang,
      guideLang,
      backLang,
      titleLang,
      leadLang,
      paragraphLang,
      mainInfoLang,
      numberCharsErrorMinLang,
      numberCharsErrorMaxLang,
      lettersCharsErrorMinLang,
      weekLang,
      mediumLang,
      strongLang,
      veryStrongLang,
      errorCheckboxLang,
      charsWarningLang
    } = this.state.lang;
    const { password } = this.state;
    return (
      <div className='App'>
        <Logo />
        <MainContainer
          mainBtn={mainBtnLang}
          options={optionsLang}
          howManyChars={howManyCharsLang}
          smallLetters={smallLettersLang}
          bigLetters={bigLettersLang}
          numbers={numbersLang}
          specialChars={specialCharsLang}
          copyToClipboard={copyToClipboardLang}
          password={password}
        />
        <SideContainer guide={guideLang} />
        <ArticleContainer />
        <Footer />
        <Cookie />
      </div>
    );
  }
}

export default App;
