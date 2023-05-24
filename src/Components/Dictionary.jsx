import React, { useState } from "react";
import { getMeaning } from "../helpers/getMeaning";
import { DictionaryCard } from "./DictionaryCard";
import { InputWord } from "./DictionaryInput";

const Dictionary = () => {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const takeMeaning = async () => {
    const meaningData = await getMeaning(inputText);
    setDisplayText(meaningData);
    setInputText("");
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => takeMeaning();

  return (
    <div className="dictionaryContainer">
      <div className="dictionaryLeft">
        <InputWord value={inputText} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Submit</button>
      </div>
      <div className="dictionaryRight">
        {displayText && (
          <DictionaryCard
            word={displayText.word}
            phonetic={displayText.phonetic}
            definition={displayText.definition}
          />
        )}
      </div>
    </div>
  );
};

export { Dictionary };
