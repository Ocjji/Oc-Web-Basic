import React from 'react';
import Color from "./components/color/Color";
import ColorProvider from "./contexts/colorContext";
import Count from "./components/counter/Count";
import CountProvider from "./contexts/CountContext";

const App = () => {
  return (
    <div>
      <ColorProvider>
        <Color />
      </ColorProvider>
      <hr />
      <CountProvider>
        <Count />
      </CountProvider>
    </div>
  );
};

export default App;