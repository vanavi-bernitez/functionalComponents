import React from "react";
import { properties, messages, pillButtons } from "../tools/objects";
import { ButtonBlue } from "./PBBlue";
import { ButtonRed } from "./PBRed";
import { Avatar } from "./Avatar";

const PillButtons = () => {
    return (
        <div className="pillButtonsContainer">
            <ButtonBlue props={properties}  messageProps={messages} extraProps={pillButtons} />
            <Avatar src={properties.imgGirls[1]}/>
            <ButtonRed props={properties}  messageProps={messages} extraProps={pillButtons} />  
        </div>
    )
};

export { PillButtons };
