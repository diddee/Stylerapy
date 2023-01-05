import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Components/HomePage/HomePage';
import Contact from './Components/ContactPage/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= { <Home/> } />
        <Route path="/Contact" element= { <Contact/> } />

      </Routes>
      
    </div>
  );
}

export default App;

