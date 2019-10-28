import React, { Component } from 'react';
import '../style/App.css';
import MainContainer from './layouts/maincontainer/MainContainer';

class App extends Component {
  state = {
    currentLang: 'pl',
    urlToLangFile: 'data/lang/pl.json',
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
    return (
      <div className='App'>
        <MainContainer lang={this.state.lang} />
      </div>
    );
  }
}

export default App;
