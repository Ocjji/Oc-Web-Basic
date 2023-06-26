import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import "./assets/css/reset.css";
import Main from "./member/Main";
import NotFiles from "./member/NotFiles";
import Member from "./member/Member";
import MemberDetail from "./Member/MemberDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="member">
            {/* index : 일치 */}
            <Route element={<Member />} />
            <Route path=":memberID" element={<MemberDetail />} />
          </Route>

          <Route path="*" element={<NotFiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;