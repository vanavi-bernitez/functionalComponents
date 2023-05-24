import React, { useState } from "react";
import { DarkLightChangedImage } from "./DLCImage";
import { BinaryButton } from "./BinaryButton";

const DarkLightChanged = () => {
  const [binary, setBinary] = useState(false);
  const handleClick = () => setBinary(!binary);
  const condition = binary ? "Light" : "Dark";

  return (
    <div className="darkLightChangedContainer">
      <BinaryButton onClick={handleClick} content={condition} />
      <DarkLightChangedImage condition={condition} />
    </div>
  );
};

export { DarkLightChanged };
