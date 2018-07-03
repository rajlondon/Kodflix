import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bb from "./Movies/bb.jpg"
import BM from "./Movies/BM.jpg"
import DE from "./Movies/DE.jpg"
import game from "./Movies/game.jpg"
import walking from "./Movies/walking.jpg"
import wire from "./Movies/wire.jpg"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">    

          <h1 className="App-title">Welcome to Kodflix</h1>
        </header>

        <div className = "container">
       <div className="item"><img src={bb} className="Movies" alt="Breaking Bad" /></div>
       <div className="item"><img src={BM} className="Movies" alt="Black Mirror" /></div>
       <div className="item"><img src={DE} className="Movies" alt="Death Note" /></div>
        </div>

        <div className = "container">
        <div className="item"><img src={game} className="Movies" alt="Game of Thrones" /></div>
        <div className="item"><img src={walking} className="Movies" alt="The Walking Dead" /></div>
        <div className="item"><img src={wire} className="Movies" alt="The Wire" /></div>
        </div>

        <p className="App-intro">        
          To get started, edit <code>Hello World</code> and save to reload.       
        
        </p>
      </div>
    );
  }
}


export default App;
