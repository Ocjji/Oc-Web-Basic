import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./components/Styled/Global";
import Layout from "./components/Home/Layout";
import Visual from "./components/Home/Visual";
import Contents from "./components/Home/Contents";
import HomeLayout from "./components/Home/HomeLayout";
import Info from "./components/Introduction/Info";
import NoticeList from "./components/Board/NoticeList";


const App = () => {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/info" element={<Info />} />
            <Route path="/noticelist" element={<NoticeList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;