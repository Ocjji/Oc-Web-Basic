import React from 'react';
import PlayGround from "./components/PlayGround";
import PlayerList from "./components/PlayerList";
import GlobalStyle from "./styled/Global";
import GoodsLayout from "./components/goodsPage/GoodsLayout";

const App = () => {
  return (
    <div className="wrap">
      <div className="inner">
        <GlobalStyle />
        {/* <PlayGround /> */}
        {/* <PlayerList /> */}
        <GoodsLayout />
      </div>
    </div>
  );
};

export default App;