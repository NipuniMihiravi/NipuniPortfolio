import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./Page.css";

const EducationTimeline = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate inside component

  const educationData = [
    {
      degree: "BSc (Hons) in Software Engineering",
      university: "Cardiff Metropolitan University – UK",
      grade: "First Class",
      year: "2024 - 2025",
      details: "Specialized in Full Stack Development in JAVA, REACT and AI Data Science.",
      path: "/bsccerti",
    },
    {
      degree: "Higher National Diploma in Software Engineering",
      university: "Cardiff Metropolitan University – UK",
      grade: "Distinction",
      year: "2022-2024",
      details: "Focused on Programming(.Net, PHP), Databases, Project Management and Networking.",
      path: "/hndcerti",
    },
    {
      degree: "Diploma in Business Management",
      university: "Esoft Metro Campus, Colombo 04",
      year: "2015",
      details: "Focused on Business Management Ethics and Project Management Skill.",
      path: "/dipcerti",
    },
    {
      degree: "Certificate in Entrepreneurship and Small Business Management",
      university: "The Open University of Sri Lanka ",
      year: "2014",
      path: "/certi",
    },
    {
      degree: "G.C.E Advanced Level",
      university: "Anula Vidyalaya",
      year: "2010",
      details: "Completed A/Ls in Biology stream.",
    },
  ];

  return (
    <div className="timeline-container">
      <div className="wording">
        <h1>CERTIFICATIONS</h1>
      </div>
      <div className="timeline-line">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p className="university">{edu.university}</p>
              <p className="grade">{edu.grade}</p>
              <p className="year">{edu.year}</p>
              <p className="details">{edu.details}</p>

              {/* Navigate to route instead of opening PDF */}
              {edu.path && (
                <button
                  className="certificate-btn"
                  onClick={() => navigate(edu.path)}
                >
                  View Certificate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
