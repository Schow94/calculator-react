import React, { Component } from 'react';
import Button from './Button';

// App.js - Contains all the calculation logic and state of application
const Calculator = props => {
  // update input - Nothing is going from addToInput to onClick
  const addToInput = val => {
    console.log('input: ' + props.input);
    console.log('val: ' + val);
    return this.setState({ input: this.state.input + val });
  };

  // Sanitizes math operators
  const cleaner = props => {
    props.input = props.input.replace(/x/g, '*').replace(/÷/g, '/');
    return this.setState({ input: eval(props.input) });
  };

  // Evaluates math after operators are cleaned up
  const equals = (props, cleaner) => {
    console.log('input is: ' + props.input);
    console.log('input from app.js is: ' + props.input);
    if (!props.input) {
      return;
    } else {
      this.cleaner(props.input);
    }
  };

  const percent = () => {
    const percentage = this.state.input / 100;
    this.setState({ input: percentage });
  };

  const toggle = () => {
    const num = this.state.input * -1;
    this.setState({ input: num });
  };

  // Not sure why, but cannot read property 'handleClear of undefined'
  const handleClear = () => {
    this.setState({ input: '' });
  };

  return (
    <div>
      <div className="calculator-body">
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
};

export default Calculator;
