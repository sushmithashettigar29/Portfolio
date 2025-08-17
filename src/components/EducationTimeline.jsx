import "../styles/EducationTimeline.css";

const EducationTimeline = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering (B.E) in Computer Science & Engineering",
      institution:
        "Mangalore Institute of Technology and Engineering, Moodbidri",
      period: "2022 - Present",
      marks: "CGPA : 8.925",
    },
    {
      id: 2,
      degree: "Senior Secondary (12th) in PCMB",
      institution: "Govt PU College, Bailur",
      period: "2021 - 2022",
      marks: "Percentage : 95.33%",
    },
    {
      id: 3,
      degree: "Secondary School (SSLC)",
      institution: "Govt Junior College, Bailur",
      period: "2019 - 2020",
      marks: "Percentage : 90.01%",
    },
  ];

  return (
    <div className="timeline-container">
      {educationData.map((edu) => (
        <div key={edu.id} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-degree">{edu.degree}</h3>
            <div className="timeline-meta">
              <span className="timeline-institution">{edu.institution}</span>
              <span className="timeline-period">{edu.period}</span>
            </div>
            <h3 className="timeline-marks">{edu.marks}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;
