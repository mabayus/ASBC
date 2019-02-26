import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import MainComponent from './MainComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainComponent />
      </div>
    );
  }
}

export default App;
