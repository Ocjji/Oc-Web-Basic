import React from 'react';
import Color from "./components/color/Color";
import ColorProvider from "./contexts/colorContext";
import Count from "./components/counter/Count";
import CountProvider from "./contexts/CountContext";
import ChangeColor from "./components/color/ChangeColor";
import ChangeColorProvider from "./contexts/ChangeColorContext";
import CntProvider from "./contexts/CntContext";
import Cnt from "./components/counter/Cnt";
import CounterProvider from "./contexts/CounterContext";
import Counter from "./components/counter/Counter";
import PlayProvider from "./contexts/PlayContext";
import Play from "./components/active/Play";
import Todos from "./todos/Todos";
import TodoProvider from "./contexts/TodoContext";

const App = () => {
  return (
    <div>
      <TodoProvider>
        <ColorProvider>
          <CountProvider>
            <PlayProvider >
              <Play />
              <Todos />
              <Color />
              <Count />
            </PlayProvider>
          </CountProvider>
        </ColorProvider>
      </TodoProvider>
    </div>
  );
};

export default App;