import React from "react";
import './App.css';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from './components/Content/Editor';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/editor" element={<Editor />} />
        <Route path="/" element={<Content />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
