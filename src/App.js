import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { AboutAs } from "./components/Main/AboutAs";
import { WhatWeDo } from "./components/Main/WhatWeDo";
import { Jobs } from "./components/Main/Jobs";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <AboutAs />
        <WhatWeDo />
        <Jobs />
        <Footer />
    </div>
  );
}

export default App;
