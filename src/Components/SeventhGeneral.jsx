import React from "react";
import { messages, subTittleStyle } from "../tools/objects";
import { SectionTitle } from "./SectionTittle";
import { ItemsAdder } from "./ItemsAdder";

const SeventhGeneralContainer = (props) => {
  return (
    <div id={props.id} style={props.style}>
      <SectionTitle
        message={messages.sectionTitle[5]}
        styleProps={{
          backgroundColor: "rgba(238, 238, 238, 0.4)",
          ...subTittleStyle,
        }}
      />
      <ItemsAdder />
    </div>
  );
};

export { SeventhGeneralContainer };