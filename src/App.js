import React, { Component } from 'react';
import './App.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class ProgBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {percent: props.percent, class: props.class };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.randProgress(),
      3000
    );
  }

  randProgress(){
    this.setState({percent: getRandomInt(0,150)});
  }

  render() {
    if (this.state.percent > 100) {
      return(
        <p><span class="percentLabel">{this.state.percent}%</span><progress class={this.state.class+" overOneHundred"} max="100" value={this.state.percent}></progress></p>
      )
    } else{
      return(
        <p><span class="percentLabel">{this.state.percent}%</span><progress class={this.state.class} max="100" value={this.state.percent}></progress></p>
      )
    }
  }

};

class App extends Component {

  render() {
    return (
      <div className="App">
        <div class="bars">
          <ProgBar percent="30" />
          <ProgBar percent="44" />
          <ProgBar percent="134" />
          <ProgBar percent="78"  class="selected" />
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
