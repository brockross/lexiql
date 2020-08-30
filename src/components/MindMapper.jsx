import React from "react";
import WordBox from "./WordBox";

const MindMapper = ({
  graph,
  handleWordClick,
  lOffset = 500,
  tOffset = 500,
}) => {
  // receives a graph as props and navigates + renders it
  // TODO: pass node & click handler to WordBox; deal with making words clickable there
  const nodeStyles = {
    width: "400px",
    position: "absolute",
    left: `${lOffset}px`,
    top: `${tOffset}px`,
  };
  return (
    <div style={nodeStyles}>
      <WordBox word={graph} handleWordClick={handleWordClick} />

      {graph.edges.map((edge, idx) => {
        return (
          <MindMapper
            graph={edge}
            lOffset={400 * (idx + 1)}
            tOffset={0}
            handleWordClick={handleWordClick}
          />
        );
      })}
    </div>
  );
};

export default MindMapper;
