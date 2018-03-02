import React, { Component } from 'react';
import './App.css';

class ProgressBar extends React.Component {

  render() {
      return(
        <p>
          <span class="percentLabel">
            {this.props.percent}%
          </span>
          <progress max="100" value={this.props.percent}>
          </progress>
        </p>
      )
  }
};

class Selector extends React.Component {

  render() {
    return (
      <p>
        <select id="bar-select">
          <option value="bar1">Bar 1</option>
          <option value="bar2">Bar 2</option>
          <option value="bar3">Bar 3</option>
          <option value="bar4">Bar 4</option>
        </select>
      </p>
    )
  }
}

class Button extends React.Component {

  render() {
    return (
      <button>{this.props.delta}</button>
    )
  }
}


class ProgressBarInteractiveForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"buttons":[0,0,0,0],"bars":[0,0,0]};
  }

  componentDidMount() {
    fetch("https://frontend-exercise.apps.b.cld.gov.au/bars")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    var barRows = [];
    var buttonRows = [];

    for (var i = 0; i < this.state.bars.length; i++) {
      barRows.push(<ProgressBar percent={this.state.bars[i]} key={i} />);
    }

    for (var i = 0; i < this.state.buttons.length; i++) {
      buttonRows.push(<Button delta={this.state.buttons[i]} key={i} />);
    }

    return(
      <div>
        {barRows}
        <Selector />
        {buttonRows}
      </div>
    )
  }

};

class App extends Component {

  render() {
    return (
      <div className="App">
        <div class="bars">
          <ProgressBarInteractiveForm />
        </div>
      </div>
    );
  }
}

export default App;
