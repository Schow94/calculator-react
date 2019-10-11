import React from 'react';

// Input.js  - Renders all of our buttons and onClick event handlers
//not sure exactly what onCLick is doing
// want to update result with whatever I am clicking. almost like a form that updates live.
//need a this.setState somewhere

const Input = props => {
  const checkString = str => {
    if (typeof string === undefined) {
      return '';
    } else if (typeof str === 'string') {
      return str;
    } else if (typeof str === 'number') {
      const newStr = str.toString();
      if (newStr.length <= 8) {
        return newStr;
      }
      return newStr.substring(0, 10);
    }
    return '';
  };

  // console.log('display type is:  ' + typeof display);
  // console.log('props.input: ' + props.input);

  const trim = (str, checkString) => {
    console.log('props.input is a ' + typeof str);
    console.log('str is ' + str);
    if (typeof str === undefined) {
      return '';
    }
    if (typeof str === 'string') {
      return str;
    } else if (typeof str === 'number') {
      const newStr = str.toString();
      if (newStr.length <= 8) {
        return newStr;
      }
      return newStr.substring(0, 10);
    }
    return '';
    // this.checkString(str);
  };

  return <div className="input">{trim(props.input)}</div>;
};

export default Input;
