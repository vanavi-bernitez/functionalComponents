import React from "react";

const InputNumber = (props) => {
  return (
    <label>
      Enter a number:
      <input
        type="number"
        value={props.value}
        min={0}
        max={3}
        onChange={props.onChange}
      />
    </label>
  );
};

export { InputNumber };
