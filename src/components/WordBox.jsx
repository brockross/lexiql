import React from "react";

const WordBox = ({ word, handleWordClick }) => {
  return (
    <div>
      <h3>{word.word}</h3>
      <p>
        {word.definition.split(" ").map((item) => {
          return (
            <span onClick={() => handleWordClick(item, word.word)}>
              {item}&nbsp;
            </span>
          );
        })}
      </p>

      <h4>synonyms</h4>
      {word.synonyms
        ? word.synonyms.map((syn) => {
            return <p onClick={() => handleWordClick(syn, word.word)}>{syn}</p>;
          })
        : "no synonynm data"}
    </div>
  );
};

export default WordBox;
