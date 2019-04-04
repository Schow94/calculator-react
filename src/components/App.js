import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';

// App.js - Contains all the calculation logic and state of application
class App extends Component {
  //initial state
  state = {
    input: 0
  };

  // converts val which is currently a string, to a number
  // toNum = val => {
  //   return parseFloat(val);
  // };

  //accidentally turned addToInput into an add operator
  // addOperator = val => {
  //   this.setState({ input: this.state.input + val });
  // };

  //checks if val is a num
  checkNum = val => {
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numVal = parseFloat(val);
    // console.log(numVal);
    if (num.includes(numVal)) {
      //if val is a num, returns val
      this.setState({ input: numVal });
    }
  };

  // if(action === 'clear'){

  // }

  addToInput = val => {
    this.setState({ input: this.state.input + this.checkNum(val) });
  };

  handleClear = () => {
    this.setState({ input: 0 });
  };

  isOperator = val => {
    if (isNaN(val)) {
      console.log('Not a number');
    } else {
      return val;
    }
  };

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
            <Button handleClick={this.checkNum}>+/-</Button>
            <Button handleClick={this.checkNum}>%</Button>
            <Button handleClick={this.checkNum}>÷</Button>
          </div>

          <div className="row">
            <Button handleClick={this.checkNum}>7</Button>
            <Button handleClick={this.checkNum}>8</Button>
            <Button handleClick={this.checkNum}>9</Button>
            <Button handleClick={this.checkNum}>x</Button>
          </div>

          <div className="row">
            <Button handleClick={this.checkNum}>4</Button>
            <Button handleClick={this.checkNum}>5</Button>
            <Button handleClick={this.checkNum}>6</Button>
            <Button handleClick={this.checkNum}>-</Button>
          </div>

          <div className="row">
            <Button handleClick={this.checkNum}>1</Button>
            <Button handleClick={this.checkNum}>2</Button>
            <Button handleClick={this.checkNum}>3</Button>
            <Button handleClick={this.checkNum}>+</Button>
          </div>

          <div className="row">
            <div className="zero">
              <Button className="zero" handleClick={this.checkNum}>
                0
              </Button>
            </div>
            <Button handleClick={this.checkNum}>.</Button>
            <Button handleClick={this.checkNum}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
