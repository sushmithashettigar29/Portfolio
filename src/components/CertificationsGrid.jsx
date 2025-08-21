// CertificationsGrid.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/CertificationsGrid.css";

const CertificationsGrid = () => {
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Apna College",
      date: "September 2024",
      skills: ["HTML", "CSS", "JS", "TailwindCSS", "Bootstrap", "MERN Stack"],
      link: "https://drive.google.com/file/d/1Oc1RVds5rRUP1nn13wDdbAZwNlvXMGiJ/view?usp=drive_link",
    },
    {
      id: 2,
      title: "Google UX Design",
      issuer: "Coursera",
      date: "June 2024",
      skills: ["Figma", "Wireframing", "UX Design"],
      link: "https://drive.google.com/file/d/1zCiUdsYBxBcTDXgNI8AsZo6nG0czeabE/view?usp=drive_link",
    },
    {
      id: 3,
      title: "MongoDB Developer's Toolkit",
      issuer: "GeeksforGeeks",
      date: "October 2024",
      skills: ["MongoDB", "MongoDB Atlas"],
      link: "https://drive.google.com/file/d/1QEy0QS17_XT0P_4Jj29Uq0nycR9GreVs/view?usp=drive_link",
    },
    {
      id: 4,
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "August 2024",
      skills: ["Azure", "Cloud Services"],
      link: "https://drive.google.com/file/d/1vxi7ekG5-bA6voeytsET1k3LgNcIFY3w/view?usp=drive_link",
    },
    {
      id: 5,
      title: "Introduction to AI and ChatGPT",
      issuer: "Udemy",
      date: "August 2025",
      skills: ["Artificial Intelligence", "ChatGPT"],
      link: "https://drive.google.com/file/d/1FhmBmQ-hA_Gan-ymb2zwX3dubfe0gTTW/view?usp=drive_link",
    },
    {
      id: 6,
      title: "Python Basics Course",
      issuer: "Udemy",
      date: "August 2025",
      skills: ["Python"],
      link: "https://drive.google.com/file/d/1y76lpFOiC2clZJ4HAXNWBn33axpXYJJC/view?usp=sharing",
    },
  ];

  return (
    <Container className="certifications-container">
      <Row className="g-4">
        {certifications.map((cert) => (
          <Col key={cert.id} xs={12} md={6} lg={6}>
            <div className="certification-card">
              <div className="certification-header">
                <h3>{cert.title}</h3>
                <div className="issuer">{cert.issuer}</div>
              </div>
              <div className="certification-details">
                <div className="date">{cert.date}</div>
                {cert.credentialId && (
                  <div className="credential-id">ID: {cert.credentialId}</div>
                )}
              </div>
              <div className="skills">
                <strong>Skills:</strong> {cert.skills.join(", ")}
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                View Certificate
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CertificationsGrid;
