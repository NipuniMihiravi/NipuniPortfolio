import React from "react";
import "./Page.css";

const workData = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self Employed",
    year: "2024 - Present",
    details: "Developing and Maintaining Full-Stack Applications and Website using React, JAVA, and MongoDB.",

  },
  {
    role: "Office Administration",
    company: "Ceylon Electricity Board, R.A. De Mel Mawatha",
    year: "2013 - 2023",
    details: "Actively Contributing to Carious Projects, Ensuring Effective Collaboration with Team Members.",

  },

];

const WorkExperienceTimeline = () => {
  return (
    <div className="timeline-container right-timeline">
      <div className="wording right-heading">
        <h1>WORK EXPERIENCE</h1>
      </div>
      <div className="timeline-line right-line">
        {workData.map((work, index) => (
          <div key={index} className="timeline-item right-item">
            {/* Dot */}
            <div className="timeline-dot right-dot"></div>

            {/* Content */}
            <div className="timeline-content rightt-content">
              <h3>{work.role}</h3>
              <p className="university">{work.company}</p>
              <p className="year">{work.year}</p>
              <p className="details">{work.details}</p>
              {work.certificate && (
                <a
                  href={work.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-btn"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceTimeline;
