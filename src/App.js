import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bb.jpg from "./Movies/bb.jpg"
import BM.jpg from "./Movies/BM.jpg"
import DE.jpg from "./Movies/DE.jpg"
import game.jpg from "./Movies/game.jpg"
import walking.jpg from "./Movies/walking.jpg"
import wire.jpg from "./Movies/wire.jpg"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">    

          <h1 className="App-title">Welcome to Kodflix</h1>
        </header>

        <div className = "container">
          <Image className="item">Black Mirror</Image>
          <Image className="item">Breaking Bad</Image>
          <Image className="item">Death Note</Image>
        </div>

        <div className = "container">
          <Image className="item">Game of Thrones</Image>
          <Image className="item">The Walking Dead</Image>
          <Image className="item">The Wire</Image>
        </div>

        <p className="App-intro">        
          To get started, edit <code>Hello World</code> and save to reload.       
        
        </p>
      </div>
    );
  }
}


export default App;
