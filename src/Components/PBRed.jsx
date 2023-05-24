import React from "react";

const ButtonRed = ({ props, messageProps, extraProps }) => {
  const handleClick = () => {
    alert(messageProps.secondOptionPill);
  };
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: props.fontColor[1], ...extraProps }}
    >
      Pill
    </button>
  );
};

export { ButtonRed };
