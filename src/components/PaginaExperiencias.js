import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Hackmx from "../assets/hackmx6.png";
import Zazil from "../assets/zazil.png";
import banorte from "../assets/banorte.jpeg";
import Verqor from "../assets/verqor.png";
import "../styles/PaginaExperiencias.css";

function PaginaExperiencias() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const experiences = {
    verqor: {
      title: "Software Engineer - Verqor (Agro Fintech)",
      duration: "Feb 2024 – May 2024",
      image: Verqor,
      details: [
        "This project involved the development of an agricultural simulation video game for the Verqor platform, aimed at providing users with an immersive experience in managing a virtual farm. Players assume the role of farm owners, making decisions about what to grow, how to manage resources, and how to expand their operations. The game’s dynamic is based on financial management, with an integrated loan system inspired by Verqor’s financial services, adding a realistic and educational component. This approach allowed players to learn about the importance of financial decision-making within the context of their virtual farm.",
        "The game not only offers entertainment but also has a significant educational aspect by presenting agricultural and strategic challenges that require applied knowledge to overcome. From a technical standpoint, Unity was used for the game’s development, enabling the creation of an interactive and visually engaging experience. The database was designed with MySQL, facilitating the storage of data related to player progress and in-game transactions.",
        "For the frontend, React, JavaScript, CSS, and HTML were used to build the user interface and manage interactions, while the backend was developed with Node.js to handle communications and create a REST API using Postman. This approach ensured smooth integration and a dynamic user experience on the platform.",
      ],
    },
    zazil: {
      title: "Mobile Developer - Zazil App",
      duration: "Aug 2024 – Oct 2024",
      image: Zazil,
      details: [
        "In this project, I developed a mobile application in Kotlin to support a municipal association in expanding its sales channels. The goal was to empower local businesses to reach new customers through a user-friendly mobile platform, promoting community growth.",
        "The application integrated Stripe for secure payment processing, enabling smooth and reliable transactions for users. I also implemented a functional database that allowed businesses to track their sales and customer interactions effectively.",
        "A key objective of the app was to combat misinformation about menstruation. To achieve this, I incorporated educational resources that raised awareness on menstruation health, promoting accurate information within the app.",
      ],
    },
    danone: {
      title: "IT Portfolio Intern - Danone",
      duration: "Aug 2024 – Present",
      details: [
        "As part of my internship at Danone, I developed data analysis tools in Power BI to create executive reports and visualizations, providing decision-makers with insights into the company’s performance across various sectors.",
        "I restructured a manual Excel extraction process by automating it using JSON files, which improved efficiency and reduced the likelihood of errors in data handling.",
        "I also worked on cleaning redundant data in the entity-relationship structure within Power BI to enhance data quality and ensure accurate reporting.",
        "Furthermore, I optimized internal processes by identifying opportunities for automation and continuous improvement, contributing to the company’s operational efficiency.",
      ],
    },
    hackmx: {
      title: "Chief Coordinator of Sponsorships - HackMX6",
      duration: "2024",
      image: Hackmx,
      details: [
        "In my role as Chief Coordinator of Sponsorships for HackMX6, I led the efforts to establish and manage sponsorship partnerships, which were crucial for the success of the hackathon. I worked closely with major companies to secure their participation and support for the event.",
        "I negotiated and facilitated collaborations with industry giants like Google, Oracle, and NVIDIA, ensuring that the hackathon received valuable resources, mentoring, and financial backing to create a competitive and engaging environment for participants.",
      ],
    },
    banorte: {
      title: "Hackathon Banorte 2024 Semifinalist",
      duration: "2024",
      image: banorte,
      details: [
        "As a semifinalist in the Hackathon Banorte 2024, I contributed to the development of a multi-agent system using Google Vertex AI. The system was designed to solve complex financial problems with the help of artificial intelligence, making it a valuable tool for banking services.",
        "Additionally, I created a Swift application that enabled users to interact with the system via a chatbot. This integration improved the user experience, allowing for easy access to the AI-driven services provided by the multi-agent system.",
      ],
    },
  };

  const experience = experiences[jobId];

  if (!experience) {
    return <p>Experience not found.</p>;
  }

  return (
    <section>
      <h2>{experience.title}</h2>
      <p>
        <strong>{experience.duration}</strong>
      </p>
      {experience.image && (
        <div className="image-container">
          <img
            src={experience.image}
            alt={experience.title}
            className="experience-image"
          />
        </div>
      )}
      <ul>
        {experience.details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/experience")}>Go Back</button>
    </section>
  );
}

export default PaginaExperiencias;
