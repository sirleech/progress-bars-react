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
    var bars = this.state.bars;
    var rows = [];
    for (var i = 0; i < bars.length; i++) {
    // note: we add a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(<ProgressBar percent={bars[i]} key={i} />);
    }
    return(
      <div>
        {rows}
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
