import React, { useState } from "react";
import { BackgroundColoredImage } from "./BCImage";
import { InputRed } from "./InputRed";
import { InputGreen } from "./InputGreen";
import { InputBlue } from "./InputBlue";
import { properties } from "../tools/objects";

const BackgroundColored = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(50);
  const [blueValue, setBlueValue] = useState(0);

  const handleRedValue = (event) => {
    setRedValue(event.target.value);
  };
  const handleGreenValue = (event) => {
    setGreenValue(event.target.value);
  };

  const handleBlueValue = (event) => {
    setBlueValue(event.target.value);
  };

  const backgndProperties = {
    background: `radial-gradient(circle, rgba(${redValue}, ${greenValue}, ${blueValue},1) 30%, rgba(255,255,255,0.5) 100%)`,
  };

  return (
    <div className="backgroundColoredContainer">
      <BackgroundColoredImage props={backgndProperties} src={properties.imgGirls[0]} />
      <div className="sliders">
        <div className="sliderContainer">
          <label htmlFor="red">R</label>
          <InputRed value={redValue} onChange={handleRedValue} />
        </div>
        <div className="sliderContainer">
          <label htmlFor="green">G</label>
          <InputGreen value={greenValue} onChange={handleGreenValue} />
        </div>
        <div className="sliderContainer">
          <label htmlFor="blue">B</label>
          <InputBlue value={blueValue} onChange={handleBlueValue} />
        </div>
      </div>
    </div>
  );
};

export { BackgroundColored };
