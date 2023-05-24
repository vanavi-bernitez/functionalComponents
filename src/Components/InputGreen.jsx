import React from "react";

const InputGreen = (props) => {
  return (
    <input
      type="range"
      id="red"
      min="0"
      max="255"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export { InputGreen };