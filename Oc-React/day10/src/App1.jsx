import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages1/Home';
import About from './pages1/About';
import Profile from './pages1/Profile';
import Project from './pages1/Project';
import Notfiles from './pages1/Notfiles';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/project">Project</Link></li>
      </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/project' element={<Project />} />
          <Route path='*' element={<Notfiles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;