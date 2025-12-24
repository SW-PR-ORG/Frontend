import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import "./App1.css";

function App() {
  return (
    <Router>
      <div className="page">
        <header className="header">
          <NavLink to="/how-it-works" end className={({ isActive }) => isActive ? "tab active" : "tab"}>
            How It Works
          </NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "tab active" : "tab"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "tab active" : "tab"}>
            About Us
          </NavLink>
        </header>

        <Routes>
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;