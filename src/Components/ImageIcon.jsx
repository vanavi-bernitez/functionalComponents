import React from "react";

const ImageIcon = (props) => {
  return (
    <img
      src={props.src}
      style={props.style}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      alt="social media"
    />
  );
};

export { ImageIcon };
