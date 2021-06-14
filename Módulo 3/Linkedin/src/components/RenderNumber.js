import React from "react";
const RenderNumber = (props) => {
  const numbers = [1, 4, 6, 8, 45, 89];
  return numbers
    .filter((number) => number > props.numberValue)
    .map((number) => {
      return <li key={number}>{number}</li>;
    });
};

export default RenderNumber;
