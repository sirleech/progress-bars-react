import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>00%<progress max="100" value="80"></progress></p>
        <p>00%<progress max="100" value="33"></progress></p>
        <p>00%<progress max="100" value="33" class="selected"></progress></p>
        <p>00%<progress max="100" value="44"></progress></p>

        <p>
          <label>Select your bar</label>
          <select id="bar-select">
            <option value="bar1">Bar 1</option>
            <option value="bar2">Bar 2</option>
            <option value="bar3">Bar 3</option>
            <option value="bar4">Bar 4</option>
          </select>
        </p>

        <p>
          <label>Change progress</label>
          <button>0%</button>
          <button>0%</button>
          <button>0%</button>
        </p>

      </div>
    );
  }
}

export default App;
