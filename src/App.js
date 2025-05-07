import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./styles/App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import PaginaExperiencias from "./components/PaginaExperiencias";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Experience
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:jobId" element={<PaginaExperiencias />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
