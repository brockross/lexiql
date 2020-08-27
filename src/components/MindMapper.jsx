import React from "react";
import WordBox from "./WordBox";

const MindMapper = ({ graph, handleWordClick }) => {
  // receives a graph as props and navigates + renders it
  console.log(graph);
  if (graph.edges.length) {
    return graph.edges.map((edge) => {
      return (
        <div>
          <h3>{edge.word}</h3>
          <p onClick={() => handleWordClick("functional", edge.word)}>
            {edge.definitions[0].definition}
          </p>
        </div>
      );
    });
  } else {
    return <p>no data</p>;
  }
};

export default MindMapper;
