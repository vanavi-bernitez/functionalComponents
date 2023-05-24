import React from "react";
import {
  properties,
  messages,
  headerAvatars,
  headerContainer,
  tittleStyle,
} from "../tools/objects";
import { NPTittle } from "./NPTittle";
import { LeftAvatar } from "./LeftAvatar";
import { RightAvatar } from "./RightAvatar";

const NonPlants = () => {
  return (
    <div className="nonPlantsContainer" style={headerContainer}>
      <LeftAvatar src={properties.imgGirls[2]} styleImage={headerAvatars} />
      <NPTittle message={messages.headerTittle} styleProps={tittleStyle} />
      <RightAvatar src={properties.imgGirls[3]} styleImage={headerAvatars} />
    </div>
  );
};

export { NonPlants };
