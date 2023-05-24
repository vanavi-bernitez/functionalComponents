import React from "react";
import { iconsStyle } from "../tools/footerStyle";
import { properties } from "../tools/objects";
import { IconsContainer } from "./FIContainer";

const Media = () => {
  return (
    <>
      <IconsContainer src={properties.imgFooter} styleProp={iconsStyle} />
    </>
  );
};

export { Media };
