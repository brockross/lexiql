import React from "react";
import WordBox from "./WordBox";

const MindMapper = ({ graph, handleWordClick }) => {
  // receives a graph as props and navigates + renders it
  // TODO: recursive rendering? just not sure yet how to handle that so the view isn't inherently nested--i.e, a node's edges should not semantically or graphically be its 'children' in the way a <p> might be a nested child of a <div>
  // TODO: pass node & click handler to WordBox; deal with making words clickable there

  return (
    <div style={{ border: "2px solid grey", width: "400px" }}>
      <h3>{graph.word}</h3>
      <p>{graph.definition}</p>

      <h4>synonyms</h4>
      {graph.synonyms
        ? graph.synonyms.map((syn) => {
            return (
              <p onClick={() => handleWordClick(syn, graph.word)}>{syn}</p>
            );
          })
        : "no synonynm data"}

      {graph.edges.map((edge) => {
        return <MindMapper graph={edge} handleWordClick={handleWordClick} />;
      })}
    </div>
  );
};

export default MindMapper;
