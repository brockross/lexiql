import React, { useState } from "react";
import produce from "immer";
import key from "../../key";

import MindMapper from "./MindMapper";

const App = () => {
  const [wordGraph, setWordGraph] = useState("");
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value.toLowerCase());
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
      .then((data) => addWord(data, null));

    e.preventDefault();
  };

  const findSource = (word, graph) => {
    // nav graph to find node where node.word == word
    // return that node
    // TODO: keep track of visited words to prevent infinite loops
    if (graph.word == word) {
      return graph;
    } else {
      for (let i = 0; i < graph.edges.length; i++) {
        let nextNode = graph.edges[i];
        return findSource(word, nextNode);
      }
    }
  };

  const addWord = (wordData, sourceWord) => {
    const newWord = {
      word: wordData.word,
      definition: wordData.results[0].definition,
      synonyms: wordData.results[0].synonyms,
      edges: [],
    };
    if (sourceWord) {
      const nextGraph = produce(wordGraph, (draftGraph) => {
        let sourceNode = findSource(sourceWord, draftGraph);
        sourceNode.edges.push(newWord);
      });
      setWordGraph(nextGraph);
    } else {
      setWordGraph(newWord);
    }
  };

  const handleWordClick = (word, sourceWord) => {
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": key,
      },
    })
      .then((res) => res.json())
      .then((data) => addWord(data, sourceWord));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter a word: </label>
        <input name="word" onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
      {wordGraph ? (
        <MindMapper graph={wordGraph} handleWordClick={handleWordClick} />
      ) : (
        "enter a word"
      )}
    </div>
  );
};

export default App;
