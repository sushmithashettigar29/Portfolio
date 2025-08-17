// ExperienceTimeline.js
import React from "react";
import ExperienceCard from "./ExperienceCard";
import "../styles/ExperienceTimeline.css";

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      date: "Nov – Dec 2024",
      company: "Infosys Springboard",
      role: "Angular full-stack Intern",
      description: "",
      bullets: [
        "Developing the front-end of the BidNow platform using Angular, focusing on creating interactive and dynamic user interfaces.",
        "Implementing real-time updates and enhancing user engagement for a seamless auction experience."
      ]
    }
  ];

  return (
    <div className="experience-timeline">
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          date={exp.date}
          company={exp.company}
          role={exp.role}
          description={exp.description}
          bullets={exp.bullets}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline;