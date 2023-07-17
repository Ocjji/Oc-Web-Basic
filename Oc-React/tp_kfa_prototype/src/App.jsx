import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayGround from "./components/PlayGround";
import PlayerList from "./components/PlayerList";
import GlobalStyle from "./styled/Global";
import GoodsLayout from "./components/goodsPage/GoodsLayout";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import GoodsPopup from "./components/goodsPage/GoodsPopup";

const App = () => {
  const { isGoodsPopup } = useSelector(state => state.goodsR);
  return (
    <BrowserRouter >
      <GlobalStyle />
      {isGoodsPopup && <GoodsPopup />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/squad" element={<PlayGround />} />
          <Route path="/shop" element={<GoodsLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div className="wrap">
    //   <div className="inner">
    //     {/* <PlayGround /> */}
    //     {/* <PlayerList /> */}
    //     <GoodsLayout />
    //   </div>
    // </div>
  );
};

export default App;