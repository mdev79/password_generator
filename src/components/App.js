import React, { Component } from 'react';
import '../style/App.css';
import MainContainer from './layouts/maincontainer/MainContainer';

class App extends Component {
  state = {
    //
  };
  render() {
    return (
      <div className='App'>
        <MainContainer />
      </div>
    );
  }
}

export default App;
