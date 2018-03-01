import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><span class="percentLabel">00%</span><progress max="100" value="80"></progress></p>
        <p><span class="percentLabel">00%</span><progress max="100" value="33"></progress></p>
        <p><span class="percentLabel">00%</span><progress max="100" value="33"></progress></p>
        <p><span class="percentLabel">00%</span><progress max="100" value="44" class="selected"></progress></p>

        <p>
          <select id="bar-select">
            <option value="bar1">Bar 1</option>
            <option value="bar2">Bar 2</option>
            <option value="bar3">Bar 3</option>
            <option value="bar4">Bar 4</option>
          </select>
        </p>

        <p>
          <button>+55</button>
          <button>+2</button>
          <button>-67</button>
        </p>

      </div>
    );
  }
}

export default App;
