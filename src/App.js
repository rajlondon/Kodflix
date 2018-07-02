import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import picture from './abm.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">    

          <h1 className="App-title">Welcome to Kodflix</h1>
        </header>
        <p className="App-intro">        
          To get started, edit <code>Hello World</code> and save to reload.       
        <img src={picture} className="abm" alt="Logo" />;
        </p>
      </div>
    );
  }
}

export default App;
