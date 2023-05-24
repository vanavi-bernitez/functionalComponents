import React, { useState } from "react";
import { properties } from "../tools/objects";
import { ColorChangedCard } from "./CCCard";

const ColorChanged = ({ styleProps }) => {
  const [selectedValue, setSelectedValue] = useState("rosybrown");
  const handleChangedValue = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="dropdownContainer" style={{ styleProps }}>
      <label style={{ marginLeft: "2em", fontSize: "larger", fontWeight: "bolder" }} htmlFor="colors">
        Choose one:
      </label>
      <select
        name="colors"
        id="colors"
        value={selectedValue}
        onChange={handleChangedValue}
        style={{margin: "1em", fontSize: "large", backgroundColor: "#eeee", height: "2em", borderRadius: "2em"}}
      >
        <option value="rosybrown">Pale Rose</option>
        <option value="skyblue">Pale Blue</option>
        <option value="orangered">Orange</option>
        <option value="mediumseagreen">Green</option>
      </select>
      <ColorChangedCard src={properties} color={selectedValue} />
    </div>
  );
};

export { ColorChanged };
