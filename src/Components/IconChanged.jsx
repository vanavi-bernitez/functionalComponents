import React, { useState } from "react";
import { properties } from "../tools/objects";
import { IconChangedImage } from "./ICImage";
import { RandomNumberButton } from "./RandomNumberButton";

const IconChanged = () => {
  const [srcImage, setSrcImage] = useState(properties.imgSrc[0]);
  
  const handleClick = () => {
    setSrcImage(properties.imgSrc[Math.round(Math.random() * 4)]);
  };

  return (
    <div className="iconChangedContainer">     
      <IconChangedImage src={srcImage} />
      <RandomNumberButton onClick={handleClick} />
    </div>
  );
};

export { IconChanged };
