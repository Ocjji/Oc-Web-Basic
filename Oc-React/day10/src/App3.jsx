import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Notfiles from './pages/Notfiles';
import "./pages/style.css";
// import "./assets/css/reset.css";
import Navbar from './pages/Navbar';

const data = [
  { title: "html", info: "html, css 설명입니다." },
  { title: "js", info: "javascript 설명입니다." },
  { title: "react", info: "react 설명입니다." },
  { title: "nodejs", info: "node.js 설명입니다." }
]

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <hr />

          <li><Link to="/project/html">html</Link></li>
          <li><Link to="/project/js">js</Link></li>
          <li><Link to="/project/react">react</Link></li>
          <li><Link to="/project/nodejs">nodejs</Link></li>
        </ul>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/project/:name' element={<Project data={data} />} />
          {/* <Route path='*' element={<Notfiles />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;