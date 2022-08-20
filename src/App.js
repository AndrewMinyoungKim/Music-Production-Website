import './App.css';
import React, { Component } from 'react';
import './Components/styles.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Equipment from './Components/Equipment';
import Ableton from './Components/Ableton';
import Arrangement from './Components/Arrangment';
import Recording from './Components/Recording';
import Production from './Components/Production';
import Effects from './Components/Effects';
import MixMaster from './Components/MixMaster';
import SoundDesign from './Components/SoundDesign';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="animation-area">
          <ul className="box-area">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/equipment" element={<Equipment/>} />
          <Route path="/ableton" element={<Ableton/>} />
          <Route path="/arrangement" element={<Arrangement/>} />
          <Route path="/recording" element={<Recording/>} />
          <Route path="/production" element={<Production/>} />
          <Route path="/effects" element={<Effects/>} />
          <Route path="/mixmaster" element={<MixMaster/>} />
          <Route path="/sounddesign" element={<SoundDesign/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
