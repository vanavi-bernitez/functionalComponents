import React from "react";
import { Icons } from "./Icons";

const IconsContainer = ({ src, styleProp }) => {
  const listIcons = src.map((icon) => <Icons imgSrc={icon} />);
  return <div className="mediaIconsContainer" style={styleProp}>{listIcons}</div>;
};

export { IconsContainer };
