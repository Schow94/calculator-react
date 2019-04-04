import React from 'react';

// - Output.js - renders a div with our result
const Button = props => {
  return (
    <div
      className="button output"
      onClick={() => {
        // console.log(props);
        props.handleClick(props.children);
      }}
    >
      {props.children}
    </div>
  );
};

export default Button;
