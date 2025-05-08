import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./styles/App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import PaginaExperiencias from "./components/PaginaExperiencias";
import CV from "./components/CV";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cv"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              CV
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:jobId" element={<PaginaExperiencias />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
