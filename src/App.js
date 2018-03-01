import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><progress max="100" value="80"></progress></p>
        <p><progress max="100" value="33"></progress></p>
        <p><progress max="100" value="33"></progress></p>
        <p><progress max="100" value="44"></progress></p>
      </div>
    );
  }
}

export default App;
