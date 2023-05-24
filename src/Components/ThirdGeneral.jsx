import React from "react";
import { messages, subTittleStyle } from "../tools/objects";
import { SectionTitle } from "./SectionTittle";
import { IconChanged } from "./IconChanged";

const ThirdGeneralContainer = (props) => {
    return (
      <div id={props.id} style={props.style}>
        <SectionTitle
            message={messages.sectionTitle[2]}
            styleProps={subTittleStyle}
          />
          <IconChanged />
      </div>
    );
  };
  
  export { ThirdGeneralContainer };