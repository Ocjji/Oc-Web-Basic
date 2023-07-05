import React from 'react';
import Counter from "./components/Counter";
import ColorList from "./components/ColorList";
import ColorSquare from "./components/ColorSquare";
import ColorListInput from "./components/ColorListInput";

const App = () => {
  return (
    <div>
      <Counter />
      <ColorSquare />
      <ColorListInput />
      <ColorList />
    </div>
  );
};

export default App;