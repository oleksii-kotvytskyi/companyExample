import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { AboutAs } from "./components/Main/AboutAs";
import { WhatWeDo } from "./components/Main/WhatWeDo";

function App() {
  return (
    <div className="App">
        <Header />
        <AboutAs />
        <WhatWeDo />
    </div>
  );
}

export default App;
