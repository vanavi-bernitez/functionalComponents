import React from "react";

const DictionaryCard = (props) => {
  return (
    <div className="definitionCard">
      <h3>{props.word}</h3>
      <p>Phonetic: {props.phonetic}</p>
      <p>Definition: {props.definition}</p>
    </div>
  );
};

export { DictionaryCard };
