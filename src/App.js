import './App.css';
import React, { Component } from 'react';
import './Components/styles.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Equipment from './Components/Equipment';
import Ableton from './Components/Ableton';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div class="animation-area">
          <ul class="box-area">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/equipment" element={<Equipment/>} />
          <Route path="/ableton" element={<Ableton/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
