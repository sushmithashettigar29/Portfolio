// ExperienceCard.js
import React from "react";
import "../styles/ExperienceCard.css";
import icon from "../assets/img/job.png";
const ExperienceCard = ({ date, company, role, description, bullets }) => {
  return (
    <div className="experience-card">
      <div className="experience-content">
        <div className="experience-header">
          <div className="icon-img">
            <img src={icon} alt="" />
          </div>
          <div>
            <div className="experience-date">{date}</div>
            <h3 className="experience-company">{company}</h3>
            <h4 className="experience-role">{role}</h4>
          </div>
        </div>

        <p className="experience-description">{description}</p>
        <ul className="experience-bullets">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
