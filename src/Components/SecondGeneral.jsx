import React from "react";
import { messages, subTittleStyle } from "../tools/objects";
import { SectionTitle } from "./SectionTittle";
import { DarkLightChanged } from "./DarkLightChanged";

const SecondGeneralContainer = (props) => {
    return (
      <div id={props.id} style={props.style}>
        <SectionTitle
            message={messages.sectionTitle[1]}
            styleProps={subTittleStyle}
          />
          <DarkLightChanged />
      </div>
    );
  };
  
  export { SecondGeneralContainer };