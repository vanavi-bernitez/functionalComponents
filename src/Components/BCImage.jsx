import React from "react";

const BackgroundColoredImage = ({props, src}) => {
  return (
    <div className="BCImageContainer" style={props} >
        <img src={src} alt="girl with plant" />
    </div>
  );
};

export { BackgroundColoredImage };