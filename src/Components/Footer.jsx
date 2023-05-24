import React from "react";
import {properties } from "../tools/objects";
import { BrandIcon } from "./BrandIcon";
import { Media } from "./Media";

const Footer = (props) => {
  return (
    <div style={props.style}>
      <BrandIcon imgSrc={properties.brandLogo} />
      <Media />
    </div>
  );
};

export { Footer };
