import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./components/Styled/Global";
import Layout from "./components/Home/Layout";
import Visual from "./components/Home/Visual";


const App = () => {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route path="/" element={<Visual />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;