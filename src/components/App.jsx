import React, { useState } from "react";

const App = () => {
  const [wordList, setWordList] = useState([]);
  return (
    <div>
      <form>
        <label for="word">Enter a word: </label>
        <input name="word"></input>
        <button type="submit">Submit</button>
      </form>
      {wordList.map((word) => {
        return <div></div>;
      })}
    </div>
  );
};

export default App;
