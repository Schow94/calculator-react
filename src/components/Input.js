import React from 'react';

// Input.js  - Renders all of our buttons and onClick event handlers
//not sure exactly what onCLick is doing
// want to update result with whatever I am clicking. almost like a form that updates live.
//need a this.setState somewhere

const Input = props => {
  //point of this fxn is to determine if it's a # or operator

  // const isOperator = val => {
  //   if (isNaN(val)) {
  //     return NaN;
  //   } else {
  //     return val;
  //   }
  // };

  // const newVal = isOperator({ input });

  // console.log(isOperator({ input }));

  // need to figure out how to convert input string to a number
  // console.log(props);
  // console.log(props.input);

  // limits length of input that is displayed
  // - doesn't actually modify length of state though, just what user sees
  // - I think eval() return a #, so I had to convert it to a string
  const display = props.input.toString();

  // const removeZeros = str => {
  //   if (str[str.length - 1] === '0') {
  //     return str.replace(/0/g, '');
  //   }
  //   return str;
  // };

  // const noZeroDisplay = removeZeros(display);

  console.log('display type is:  ' + typeof display);
  const trim = str => {
    if (str.length <= 8) {
      return str;
    }
    return str.substring(0, 10);
  };

  return <div className="input">{trim(display)}</div>;
};

export default Input;
