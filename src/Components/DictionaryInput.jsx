import React from "react";

const InputWord = (props) => {
    return (
        <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Enter text"
      />
    )
}

export {InputWord}