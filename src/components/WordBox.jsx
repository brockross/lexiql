import React from "react";

const WordBox = ({ word }) => {
  return (
    <div>
      <h3>{word.word}</h3>
      {word.definitions.map((def) => {
        return <p>**{def.definition}</p>;
      })}
    </div>
  );
};

export default WordBox;
