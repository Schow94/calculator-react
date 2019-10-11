import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import Calculator from './Calculator';

// App.js - Contains all the calculation logic and state of application
class App extends Component {
  //initial state
  state = {
    input: ''
  };

  //checks if val is a num
  // checkNum = val => {
  //   const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   const numVal = parseFloat(val);
  //   // console.log(numVal);
  //   if (num.includes(numVal)) {
  //     //if val is a num, returns val
  //     this.setState({ input: numVal });
  //   }
  // };

  // update input - Nothing is going from addToInput to onClick
  addToInput = val => {
    console.log('input: ' + this.state.input);
    console.log('val: ' + val);
    return this.setState({ input: this.state.input + val });
  };

  // Sanitizes math operators
  cleaner = input => {
    input = this.state.input.replace(/x/g, '*').replace(/÷/g, '/');
    return this.setState({ input: eval(input) });
  };

  // Evaluates math after operators are cleaned up
  equals = (input, cleaner) => {
    console.log('input is: ' + input);
    console.log('input from app.js is: ' + input);
    if (!this.state.input) {
      return;
    } else {
      this.cleaner(input);
    }
  };

  percent = () => {
    const percentage = this.state.input / 100;
    this.setState({ input: percentage });
  };

  toggle = () => {
    const num = this.state.input * -1;
    this.setState({ input: num });
  };

  handleClear = () => {
    this.setState({ input: '' });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Calculator App</h1>

        <div className="calculator-body">
          <Input input={this.state.input} />
          {/* Trying put all <Buttons /> in a Calculator Component */}
          {/* <Calculator input={this.state.input} /> */}

          <div className="row">
            <Button handleClick={this.handleClear}>AC</Button>
            <Button handleClick={this.toggle}>+/-</Button>
            <Button handleClick={this.percent}>%</Button>
            <Button handleClick={this.addToInput}>÷</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>x</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>

          <div className="row">
            <div className="zero">
              <Button className="zero" handleClick={this.addToInput}>
                0
              </Button>
            </div>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.equals}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
