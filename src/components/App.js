import React, { Component } from 'react';
import '../style/App.css';
import Logo from './layouts/logo/Logo';
import MainContainer from './layouts/maincontainer/MainContainer';
import SideContainer from './layouts/sidecontainer/SideContainer';
import Footer from './layouts/footer/Footer';
import FourOFour from './layouts/404/404';
import Cookie from './layouts/cookie/Cookie';

class App extends Component {
  state = {
    // lang settings
    currentLang: 'pl',
    urlToLangFile: 'lang/pl.json',
    lang: {},
    //
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
    errorMessage: ''
  };

  componentDidMount() {
    const { urlToLangFile } = this.state;
    const {
      smallLetters,
      bigLetters,
      numbers,
      specialChars
    } = this.state.source;
    this.handleCookie();
    this.wallpaperChanger(10);
    fetch(urlToLangFile)
      .then(res => res.json())
      .then(res =>
        this.setState({
          lang: res,
          data: `${smallLetters}${bigLetters}${numbers}${specialChars}`
        })
      );
  }

  changeLang = lang => {
    const { checkboxOn, charsNumber, currentLang } = this.state;
    const errorMessageKey = this.handleValidate(checkboxOn, charsNumber);
    if (currentLang !== lang) {
      fetch(`lang/${lang}.json`)
        .then(res => res.json())
        .then(res =>
          this.setState({
            currentLang: lang,
            urlToLangFile: `lang/${lang}.json`,
            lang: res,
            //  ? jak to zrobić ?
            errorMessage: res[`${errorMessageKey}`]
          })
        );
    }
  };
  handleValidate = (checkboxOn, charsNumber) => {
    let errorMessageKey = '';
    if (isNaN(charsNumber)) {
      errorMessageKey = 'lettersCharsErrorLang';
    } else {
      if (charsNumber >= 4 && charsNumber <= 64 && checkboxOn.length > 0) {
        if (charsNumber <= 6 || checkboxOn.length < 3) {
          errorMessageKey = 'weakLang';
        } else if (
          (charsNumber <= 8 && checkboxOn.length > 2) ||
          (charsNumber > 8 && checkboxOn.length === 3)
        ) {
          errorMessageKey = 'mediumLang';
        } else if (
          charsNumber > 8 &&
          charsNumber < 12 &&
          checkboxOn.length === 4
        ) {
          errorMessageKey = 'strongLang';
        } else if (charsNumber >= 12 && checkboxOn.length === 4) {
          errorMessageKey = 'veryStrongLang';
        }
      } else if (
        checkboxOn.length === 0 &&
        charsNumber >= 4 &&
        charsNumber <= 64
      ) {
        errorMessageKey = 'errorCheckboxLang';
      } else if (checkboxOn.length === 0) {
        errorMessageKey = 'errorCheckboxLang';
      } else if (checkboxOn.length > 0 && charsNumber < 4) {
        errorMessageKey = 'numberCharsErrorMinLang';
      } else if (checkboxOn.length > 0 && charsNumber > 64) {
        errorMessageKey = 'numberCharsErrorMaxLang';
      }
    }
    return errorMessageKey;
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
    const { checkboxOn, currentLang, lang } = this.state;
    const value = e.target.value * 1;
    const errorMessageKey = this.handleValidate(checkboxOn, value);
    console.log(errorMessageKey);
    const errorMessage = lang[`${errorMessageKey}`];
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
    const { checkboxOn, source, charsNumber, lang } = this.state;
    const name = e.target.name;
    const checked = e.target.checked;
    let tempData = '';
    let tempCheckboxArray = checkboxOn;
    checkboxOn.includes(`${name}`) && this.state[name]
      ? (tempCheckboxArray = tempCheckboxArray.filter(el => el !== `${name}`))
      : (tempCheckboxArray = [...tempCheckboxArray, `${name}`]);
    tempCheckboxArray.forEach(el => (tempData += source[el]));
    const errorMessageKey = this.handleValidate(tempCheckboxArray, charsNumber);
    const errorMessage = lang[`${errorMessageKey}`];
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
    tempCheckboxArray.length > 0 && charsNumber >= 4 && charsNumber <= 64
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
  handleCookie = () => {
    if (
      document.cookie.replace(
        /(?:(?:^|.*;\s*)cookieInfo\s*\=\s*([^;]*).*$)|^.*$/,
        '$1'
      ) !== 'true'
    ) {
      const cookieInfo = document.querySelector('.cookie__info');
      cookieInfo.classList.add('info--visible');
      document.cookie =
        'cookieInfo=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    }
  };
  closePopUp = () => {
    const cookieInfo = document.querySelector('.cookie__info');
    cookieInfo.classList.contains('info--visible')
      ? cookieInfo.classList.remove('info--visible')
      : console.log('ale to już było i nie wróci więcej...');
  };
  wallpaperChanger = number => {
    const app = document.querySelector('.App');
    const appImageNumber = Math.floor(Math.random() * number) + 1;
    const numberFormated =
      appImageNumber >= 10 ? appImageNumber : `0${appImageNumber}`;
    console.log(`image${numberFormated}.jpg`);
    app.style.backgroundImage = `images/image${numberFormated}.jpg`;
  };

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
      mainInfoLang,
      numberCharsErrorMinLang,
      numberCharsErrorMaxLang,
      lettersCharsErrorLang,
      weakLang,
      mediumLang,
      strongLang,
      veryStrongLang,
      errorCheckboxLang,
      charsWarningLang
    } = this.state.lang;
    const { password, errorMessage } = this.state;
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
          numberCharsErrorMinLang={numberCharsErrorMinLang}
          numberCharsErrorMaxLang={numberCharsErrorMaxLang}
          lettersCharsErrorLang={lettersCharsErrorLang}
          weakLang={weakLang}
          mediumLang={mediumLang}
          strongLang={strongLang}
          veryStrongLang={veryStrongLang}
          errorCheckboxLang={errorCheckboxLang}
          charsWarningLang={charsWarningLang}
          errorMessage={errorMessage}
          mainInfoLang={mainInfoLang}
          copyPassword={this.copyPassword}
          copyToClipboardLang={copyToClipboardLang}
          getCheckboxData={this.getCheckboxData}
          getCharsNumber={this.getCharsNumber}
          getPassword={this.getPassword}
        />
        <SideContainer changeLang={this.changeLang} guide={guideLang} />
        <Footer />
        <Cookie closePopUp={this.closePopUp} handleCookie={this.handleCookie} />
        {/* <button onClick={}>test test test</button> */}
      </div>
    );
  }
}

export default App;
