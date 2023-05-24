import React, { useState } from "react";
import { widgetContent } from "../tools/widgetObjects";
import { WidgetButton } from "./IWButtons";
import { WidgetTittle } from "./IWTittle";
import { CardName } from "./WidgetCardName";
import { WidgetCardContent } from "./CardContent";
import { InputNumber } from "./InputFLowerNumber";

const InformationWidget = () => {
  const names = Object.keys(widgetContent);
  const content = Object.values(widgetContent)
  const [number, setNumber] = useState("");
  const [tittleValue, setTittleValue] = useState("Pick a flower");
  const [contentValue, setContentValue] = useState("...and see the magic");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setTittleValue(names[number]);
    setContentValue(content[number]);   
    setNumber("");
  };

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div className="widgetContainer">
      <div className="leftSection">
        <WidgetTittle />
        <form onSubmit={handleSubmit}>
          <InputNumber value={number} onChange={handleChange} />
          <WidgetButton />
        </form>
      </div>
      <div className="rightSection">
        <CardName  tittle={tittleValue} />
        <WidgetCardContent content={contentValue} />
      </div>
    </div>
  );
};

export { InformationWidget };
