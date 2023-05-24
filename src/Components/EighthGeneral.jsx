import React from "react";
import { messages, subTittleStyle } from "../tools/objects";
import { SectionTitle } from "./SectionTittle";
import { Dictionary } from "./Dictionary";

const EighthGeneralContainer = (props) => {
  return (
    <div id={props.id} style={props.style}>
      <SectionTitle
        message={messages.sectionTitle[6]}
        styleProps={subTittleStyle}
      />
      <Dictionary />
    </div>
  );
};

export { EighthGeneralContainer };