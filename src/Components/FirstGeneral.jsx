import React from "react";
import { messages, subTittleStyle } from "../tools/objects";
import { SectionTitle } from "./SectionTittle";
import { BackgroundColored } from "./BackgndColored";

const FirstGeneralContainer = (props) => {
  return (
    <div id={props.id} style={props.style}>
      <SectionTitle
        message={messages.sectionTitle[0]}
        styleProps={subTittleStyle}
      />
      <BackgroundColored />
    </div>
  );
};

export { FirstGeneralContainer };
