import React from "react";

const ButtonBlue = ({ props, messageProps, extraProps }) => {
  const handleClick = () => {
    alert(messageProps.firstOptionPill);
  };
  return (
    <button
      onClick={handleClick}
      style={{backgroundColor: props.fontColor[0], ...extraProps}}
    >
      Pill
    </button>
  );
};

export { ButtonBlue };
