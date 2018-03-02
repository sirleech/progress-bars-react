import React, { Component } from 'react';
import './App.css';

function makeProgBar(percent) {
  if (percent > 100) {
    return(
      <p><span class="percentLabel">{percent}%</span><progress max="100" value={percent} class="overOneHundred"></progress></p>
    )
  } else{
    return(
      <p><span class="percentLabel">{percent}%</span><progress max="100" value={percent}></progress></p>
    )
  }

};

class App extends Component {

  render() {
    return (
      <div className="App">
        <div class="bars">
        {makeProgBar(40)}
        {makeProgBar(20)}
        {makeProgBar(150)}
        {makeProgBar(80)}
        </div>

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
          <button>+34</button>
        </p>

      </div>
    );
  }
}

export default App;
