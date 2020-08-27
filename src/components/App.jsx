import React, { useState } from "react";
import produce from "immer";
import key from "../../key";

import MindMapper from "./MindMapper";

const App = () => {
  const graphHead = {
    word: "test",
    edges: [],
  };

  const [wordGraph, setWordGraph] = useState(graphHead);
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
      .then((data) => addWord(data, "test"));

    e.preventDefault();
  };

  const findSource = (word, graph) => {
    // nav graph to find node where node.word == word
    // return that node
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
      definitions: wordData.results,
      edges: [],
    };

    const nextGraph = produce(wordGraph, (draftGraph) => {
      let sourceNode = findSource(sourceWord, draftGraph);
      sourceNode.edges.push(newWord);
    });
    // need reference to node where word was clicked, so new node can be added to its edges[]
    // build new node; add nodes to each other's edges array
    setWordGraph(nextGraph);
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
        <MindMapper graph={wordGraph} handleWordClick={handleWordClick} />
      </form>
    </div>
  );
};

export default App;
