import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Pdf.css";

const CV = () => {
  return (
    <div className="cv-container">
      <h1>Currículum Vitae</h1>
      <div className="pdf-wrapper">
        <iframe
          src={`${process.env.PUBLIC_URL}/cv.pdf`}
          title="Mi CV"
          width="100%"
          height="600px"
        />
      </div>
      <a
        href={`${process.env.PUBLIC_URL}/cv.pdf`}
        download
        className="download-btn"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default CV;
