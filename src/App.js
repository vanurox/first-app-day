import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nugen</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Contact email="info@nugeninfo.com" number="9915296866"/>
        </div>
      </div>
    );
  }
}

export default App;
