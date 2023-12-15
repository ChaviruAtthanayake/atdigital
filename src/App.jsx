import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";


import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
