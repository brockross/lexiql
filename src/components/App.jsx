import React, { useState } from "react";
import key from "../../key";
import WordBox from "./WordBox";

const App = () => {
  const [wordList, setWordList] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${inputText}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": key,
      },
    })
      .then((res) => res.json())
      .then((data) => addWord(data));

    e.preventDefault();
  };

  const addWord = (wordData) => {
    const newWord = {
      word: wordData.word,
      definitions: wordData.results,
      edges: [],
    };

    setWordList([newWord, ...wordList]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter a word: </label>
        <input name="word" onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
      {wordList.map((word) => {
        console.log;
        return <WordBox word={word} />;
      })}
    </div>
  );
};

export default App;
