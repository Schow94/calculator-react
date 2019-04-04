import React, { Component } from 'react';

// Input.js  - Renders all of our buttons and onClick event handlers
//not sure exactly what onCLick is doing
// want to update result with whatever I am clicking. almost like a form that updates live.
//need a this.setState somewhere

const Input = ({ input }) => {
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
  console.log(typeof input, '= ' + input);
  return <div className="input">{input}</div>;
};

export default Input;
