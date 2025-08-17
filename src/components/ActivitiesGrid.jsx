import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/ActivitiesGrid.css";

function ActivitiesGrid() {
  const activities = [
    {
      id: 1,
      title: "CSS Battle - Secured 3rd Place",
      details:
        "Secured 3rd place by solving challenging CSS design problems during the CSS Battle held at MITE on June 29, 2024.",
      link: "https://drive.google.com/file/d/16V7cONTPijxHHhgZ51cZ9MuDN1s_Z0BC/view?usp=drive_link",
    },
    {
      id: 2,
      title: "DevelopHERs Coding Hackathon - Ranked 10th",
      details:
        "Ranked 10th by solving data structures and algorithms problems in a competitive coding environment at MITE on February 3, 2024.",
      link: "https://drive.google.com/file/d/1JKeCkomiG6dTcHy-A4ceLjOZ320cyZvH/view?usp=drive_link",
    },
    {
      id: 3,
      title: "Flipkart GRiD 7.0",
      details:
        "Participated in Flipkart GRiD 7.0, a national-level tech competition organized by Flipkart on July 13, 2025.",
      link: "",
    },
    {
      id: 4,
      title: "Meesho ScriptedByHer 2025",
      details:
        "Participated in Meesho's ScriptedByHer 2025 coding challenge, showcasing problem-solving and coding skills in July 2025.",
      link: "",
    },
    {
      id: 5,
      title: "Google Girls Hackathon 2025",
      details:
        "Participated in Google Girls Hackathon, conducted virtually by Google in 2025.",
      link: "",
    },
    {
      id: 6,
      title: "Hack4Health Hackathon",
      details:
        "Successfully participated in the CS Base Hack4Health Hackathon, contributing a creative and innovative solution for health and well-being challenges in June 2025.",
      link: "https://drive.google.com/file/d/1xl3kl_YTks4BxPCQBSaphznqpuVCnC6a/view?usp=drive_link",
    },
    {
      id: 7,
      title: "Unstop Talent Park 2025",
      details:
        "Participated in Unstop Talent Park 2025, showcasing skills and networking with industry professionals in 2025.",
      link: "https://drive.google.com/file/d/1gbaJAKlv16WUyrhlR2Qd9IM7gPTabIl-/view?usp=drive_link",
    },
    {
      id: 8,
      title: "Code Clash 2025 - The Ultimate Coding Battle",
      details:
        "Participated in the CodeQuest MCQ Challenge (Elimination Round) of Code Clash 2025, organized by Lets Code Community at Unstop in 2025.",
      link: "https://drive.google.com/file/d/1pE1ckBpUDkVPTDcousNif-UGj9pSuxyy/view?usp=drive_link",
    },
    {
      id: 9,
      title: "Fusion Techathon 3.0",
      details:
        "Developed a 'Volunteer Coordination System for NGOs' during a 24-hour national-level hackathon, enhancing social volunteer engagement. Held at Alva's Institute of Engineering & Technology in December 2024.",
      link: "https://drive.google.com/file/d/1C7NoZbwOntkS0_b-PoPE5zdm4-8_Pkjk/view?usp=drive_link",
    },
    {
      id: 10,
      title: "Logo Design Competition",
      details:
        "Participated in the Logo Design Competition organized by the Department of Information Science and Engineering in association with ZERONE at Mangalore Institute of Technology and Engineering, Moodabidri on July 11, 2024.",
      link: "https://drive.google.com/file/d/1gI8QbKjdL7okYeNYPHuADkJhs54MHsMf/view?usp=drive_link",
    },
    {
      id: 11,
      title: "Flipkart GRiD 6.0 - Software Development Track",
      details:
        "Participated in Level 1: E-Commerce & Tech Quiz of Flipkart GRiD 6.0, organized by Flipkart in 2024.",
      link: "https://drive.google.com/file/d/1u4rSryzlCo2yQUsga4yaOzRanTQUPV5I/view?usp=drive_link",
    },
    {
      id: 12,
      title: "Amazon ML Summer School",
      details:
        "Approved by the admin and participated in the Amazon ML Summer School Selection Test held on June 23, 2024.",
      link: "",
    },
  ];

  return (
    <Container className="activities-container">
      <Row className="g-4">
        {activities.map((activity) => (
          <Col key={activity.id} xs={12} md={6} lg={6}>
            <div className="activity-card">
              <h3>{activity.title}</h3>
              <p>{activity.details}</p>
              {activity.link && (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  View Certificate
                </a>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ActivitiesGrid;
