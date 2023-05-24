import React from "react";
import { InformationWidget } from "./InformationWidget";

const SixthGeneralContainer = (props) => {
  return (
    <div id={props.id} style={props.style}>
      <InformationWidget />
    </div>
  );
};

export { SixthGeneralContainer };