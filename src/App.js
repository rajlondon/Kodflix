import React, { Component } from 'react';
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

          <h1 className="App-title">Welcome to Kodiflix</h1>
        </header>

        <div className="container">

          <div className="item">
            <img src={bb} className="Movies" alt="Breaking Bad" />
            <div className="movieTitle"> <h3>Breaking Bad</h3></div>
          </div>

          <div className="item">
            <img src={BM} className="Movies" alt="Black Mirror" />
            <div className="movieTitle"> <h3>Black Mirror</h3></div>
          </div>

          <div className="item">
            <img src={DE} className="Movies" alt="Death Note" />
            <div className="movieTitle"><h3>Death Note</h3></div>
          </div>
        </div>

        <div className="container">

          <div className="item">
            <img src={game} className="Movies" alt="Game of Thrones" />
            <div className="movieTitle"> <h3>Game of Thrones</h3></div>
          </div>

          <div className="item">
            <img src={walking} className="Movies" alt="The Walking Dead" />
            <div className="movieTitle"> <h3>The Walking Dead</h3></div>
          </div>

          <div className="item">
            <img src={wire} className="Movies" alt="The Wire" />
            <div className="movieTitle"> <h3>The Wire</h3></div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
