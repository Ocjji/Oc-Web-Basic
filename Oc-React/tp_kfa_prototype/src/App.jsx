import React from 'react';
import PlayGround from "./components/PlayGround";
import PlayerList from "./components/PlayerList";
import GlobalStyle from "./styled/Global";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <PlayGround />
      <PlayerList />
    </div>
  );
};

export default App;