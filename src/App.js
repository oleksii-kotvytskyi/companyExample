import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import {AboutAs} from "./components/Main/AboutAs";

function App() {
  return (
    <div className="App">
        <Header />
        <AboutAs />
    </div>
  );
}

export default App;
