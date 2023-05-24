import React from "react";
import umbrella from "../images/umbrella.svg";

const DarkLightChangedImage = ({ condition }) => {
  const style = {
    backgroundColor: condition === "Light" ? "#FFFFFF" : "#000000",
    filter: condition === "Light" ? "invert(0)" : "invert(1)",
  };

  return (
    <div
      className="DLCImageContainer"
      style={{ backgroundColor: style.backgroundColor }}
    >
      <img src={umbrella} style={{ filter: style.filter,  }} alt="icon" />
    </div>
  );
};

export { DarkLightChangedImage };
