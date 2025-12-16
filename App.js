import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="page">

        <header className="header">
          <NavLink className="tab" to="/">Home</NavLink>
          <NavLink className="tab" to="/about">About Us</NavLink>
          <NavLink className="tab" to="/how-it-works">How It Works</NavLink>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;