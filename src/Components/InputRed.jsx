import React from "react";

const InputRed = (props) => {
  return (
    <input
      type="range"
      id="green"
      min="0"
      max="255"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export { InputRed };
