import React from "react";
import foto from "../assets/foto.jpeg";
import "../styles/About.css"; 
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-vertical-container">
      <div className="about-section about-contact-container">
        <img src={foto} alt="Roger Rendon" className="profile-image" />
        <h1>Roger Rendon</h1>
        <ul className="about-links">
          <li className="contact-info">
            <FaPhoneAlt className="icon" />
            +52 5578430107
          </li>
          <li>
            <a href="mailto:renrooger@gmail.com">
              <FaEnvelope className="icon" />
              renrooger@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/renroger"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon" />
              linkedin.com/in/renroger
            </a>
          </li>
        </ul>
      </div>

      {/* Educación */}
      <div className="about-section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>PrepaTec</strong> (2019 – 2022)
            <p>High School Diploma, Atizapán de Zaragoza, MX</p>
          </li>
          <li>
            <strong>ITESM</strong> (Anticipated Graduation Date 06/26)
            <p>B.S. in Computer Science, 6th Semester, Atizapán de Zaragoza, MX</p>
            <p><strong>Scholarships:</strong> Academic Talent Scholarship 2022</p>
          </li>
        </ul>
      </div>

      {/* Idiomas */}
      <div className="about-section">
        <h2>Languages</h2>
        <ul>
          <li><strong>Spanish:</strong> Native</li>
          <li><strong>English:</strong> Cambridge English Certificate B2</li>
          <li><strong>French:</strong> Basic</li>
        </ul>
      </div>

      {/* Habilidades técnicas */}
      <div className="about-section">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> C++, Python, SQL, C#, JavaScript, HTML/CSS, R, Clojure</li>
          <li><strong>Frameworks:</strong> Node.js, WordPress, React, Postman</li>
          <li><strong>Tools:</strong> Git, VS Code, IntelliJ, NeoVim, Figma</li>
          <li><strong>Concepts:</strong> OOP, Data Structures, Agile Methodologies</li>
          <li><strong>OS:</strong> Linux (Ubuntu, Fedora), Windows</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
