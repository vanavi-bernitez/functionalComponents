import React from "react";
import { messages, subTittleStyle } from "../tools/objects";
import { SectionTitle } from "./SectionTittle";
import { PillButtons } from "./PillButtons";

const FourthGeneralContainer = (props) => {
  return (
    <div id={props.id} style={props.style}>
      <SectionTitle
        message={messages.sectionTitle[3]}
        styleProps={{
          backgroundColor: "rgba(238, 238, 238, 0.4)",
          ...subTittleStyle,
        }}
      />
      <PillButtons />
    </div>
  );
};

export { FourthGeneralContainer };
