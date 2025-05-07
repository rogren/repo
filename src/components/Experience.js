import React from "react";
import { Link } from "react-router-dom";
import "../styles/Experience.css";

const jobs = [
  {
    id: "verqor",
    title: "Software Engineer",
    company: "Verqor (Agro Fintech)",
    duration: "Feb 2024 – May 2024",
    summary: "Unity game, landing page, MySQL, React, Node, Agile.",
  },
  {
    id: "zazil",
    title: "Mobile Developer",
    company: "Zazil App (Tec de Monterrey)",
    duration: "Aug 2024 – Oct 2024",
    summary: "Kotlin app, Stripe, sales platform & menstrual education.",
  },
  {
    id: "danone",
    title: "IT Portfolio Intern",
    company: "Danone",
    duration: "Aug 2024 – Present",
    summary: "Power BI dashboards, JSON automation, process improvement.",
  },
];

const extracurriculars = [
  {
    id: "hackmx",
    title: "Chief Coordinator of Sponsorships",
    company: "HackMX6 (Tec de Monterrey)",
    duration: "2024 – Present",
    summary: "Managed partnerships with Google, Oracle, NVIDIA for HackMX6.",
  },
  {
    id: "banorte",
    title: "Hackathon Banorte 2024 Semifinalist",
    company: "Tec de Monterrey",
    duration: "2024",
    summary: "AI multi-agent system + Swift chatbot using Google Vertex AI.",
  },
];

function Experience() {
  return (
    <section>
      <h2>Laboral Experience</h2>
      <ul className="experience-list">
        {jobs.map((job) => (
          <li key={job.id}>
            <Link to={`/experience/${job.id}`}>
              <h3>{job.title} - {job.company}</h3>
              <p>{job.duration}</p>
              <p>{job.summary}</p>
            </Link>
          </li>
        ))}
      </ul>

      <h2>Extracurricular Activities</h2>
      <ul className="experience-list">
        {extracurriculars.map((activity) => (
          <li key={activity.id}>
            <Link to={`/experience/${activity.id}`}>
              <h3>{activity.title} - {activity.company}</h3>
              <p>{activity.duration}</p>
              <p>{activity.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
