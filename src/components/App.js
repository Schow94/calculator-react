import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';

// App.js - Contains all the calculation logic and state of application
class App extends Component {
  //initial state
  state = {
    input: ''
  };

  // converts val which is currently a string, to a number
  // toNum = val => {
  //   return parseFloat(val);
  // };

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

  //this.addToInput(val) updates input state
  // this.equals() doesn't update input
  // onClick = val => {
  //   this.addToInput(val);
  //   // return this.equals();
  // };

  // update input - Nothing is going from addToInput to onClick
  addToInput = val => {
    console.log('input: ' + this.state.input);
    console.log('val: ' + val);
    return this.setState({ input: this.state.input + val });
  };

  //equals() works, just not with clean()
  equals = () => {
    //sanitizes input before evaluating w/ math logic
    const clean = this.state.input.replace(/x/g, '*').replace(/÷/g, '/');
    return this.setState({
      input: eval(clean)
    });
    // this.state.input = this.state.input.replace(/x/g, '*');
    // this.state.input = this.state.input.replace(/÷/g, '/');
    //   console.log('Sanitized string: ' + this.state.input);
    //   // console.log('after clean(): ' + this.state.input);
    //   return this.setState({ input: eval(this.state.input) });
  };

  // Uses Replace & regex to replace with proper math operators
  //figure out how to get equals to use clean() fxn so code is neater

  // updateState = () => {
  //   this.setState({ input: this.state.equals });
  // };

  percent = () => {
    const percentage = this.state.input / 100;
    this.setState({ input: percentage });
  };

  handleClear = () => {
    this.setState({ input: '' });
  };

  // isOperator = val => {
  //   if (isNaN(val)) {
  //     console.log('Not a number');
  //   } else {
  //     return val;
  //   }
  // };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Calculator App</h1>

        <div className="calculator-body">
          <Input input={this.state.input} />

          <div className="row">
            <Button dataAction="clear" handleClick={this.handleClear}>
              AC
            </Button>
            <Button handleClick={this.addToInput}>+/-</Button>
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
