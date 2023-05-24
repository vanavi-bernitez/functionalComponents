import React from "react";
import { messages, subTittleStyle, properties } from "../tools/objects";
import { SectionTitle } from "./SectionTittle";
import { ColorChanged } from "./ColorChanged";

const FifthGeneralContainer = (props) => {
  return (
    <div id={props.id} style={props.style}>
      <SectionTitle
          message={messages.sectionTitle[4]}
          styleProps={subTittleStyle}
        />
        <ColorChanged style={properties.margin} />
    </div>
  );
};

export { FifthGeneralContainer };