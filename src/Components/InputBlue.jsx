import React from "react";

const InputBlue = (props) => {
  return (
    <input
      type="range"
      id="blue"
      min="0"
      max="255"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export { InputBlue };
