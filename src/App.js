import React, { Component } from 'react';
import poster from './poster.jpg';
import logo from './duke-basketball-logo.png';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={poster} className="duke-poster" alt="poster" />
          <p>
            Duke Basketball Never Stops
          </p>
          <h5> #TheBrotherhood </h5>
        </header>
      </div>
    );
  }
}

export default App;
