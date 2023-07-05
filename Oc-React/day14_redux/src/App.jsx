import React from 'react';
import Count from "./components/count/Count";
import Color from "./components/color/Color";
import ChangeColor from "./components/color/ChangeColor";
import Counter from "./components/count/Counter";
import Todos from "./components/todos/Todos";

const App = () => {
  return (
    <div>
      <Count />
      <hr />
      <Color />
      <hr />
      <ChangeColor />
      <hr />
      <Counter />
      <hr />
      <Todos />
    </div>
  );
};

export default App;