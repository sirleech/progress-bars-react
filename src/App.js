import React, { Component } from 'react';
import './App.css';

class ProgressBar extends React.Component {

  render() {
      if (this.props.selected)
        var cssClass = "selected";

      return(
        <p>
          <span className="percentLabel">
            {this.props.percent}%
          </span>
          <progress className={cssClass} max="100" value={this.props.percent}>
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
  render(){
    return (<button onClick={this.props.handleClick}>{this.props.delta}</button>)
  }
}


class ProgressBarInteractiveForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"buttons":[],"bars":[],"selected":""};
  }

  selectBar(index) {
    this.setState({"selected": index});
  }

  updateBar(i,delta){
    var array = this.state.bars.slice(0);
    array[i] = array[i]+delta;
    this.setState({"bars": array});
  }

  getSelectedBar(){
    return this.state.selected;
  }

  isTrue(element){
    return element;
  }

  componentDidMount() {
    this.selectBar(0);

    fetch("https://frontend-exercise.apps.b.cld.gov.au/bars")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({"buttons": result.buttons,"bars": result.bars});
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
    var buttons = this.state.buttons;

    for (var i = 0; i < this.state.bars.length; i++) {
      var selected = false;
      if (this.state.selected == i)
        selected = true;

      barRows.push(<ProgressBar selected={selected} percent={this.state.bars[i]} key={i} />);
    }

    return(
      <div>
        {barRows}
        <Selector />
        {buttons.map(function(delta,index){
          return <Button handleClick={()=> this.updateBar(this.getSelectedBar(),delta)} key={index} delta={delta} />;
        },this)}
      </div>
    )
  }

};

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="bars">
          <ProgressBarInteractiveForm />
        </div>
      </div>
    );
  }
}

export default App;
