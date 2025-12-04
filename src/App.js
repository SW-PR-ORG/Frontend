import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hello from "./Hello";
import About from "./About";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
