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
        "x-rapidapi-key": "a9d7d98fb5msh8bb4498dd4c0279p1465c4jsn20116e9ee8c6",
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
