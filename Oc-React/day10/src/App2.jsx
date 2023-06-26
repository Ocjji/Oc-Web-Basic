import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Notfiles from './pages/Notfiles';
import "./pages/style.css";
import "./assets/css/reset.css";
import Navbar from './pages/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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