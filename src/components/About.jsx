import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import aboutImg from "../assets/img/about.svg";
import TrackVisibility from "react-on-screen";
import EducationTimeline from "./EducationTimeline";
import ExperienceTimeline from "./ExperienceTimeline";
import CertificationsGrid from "./CertificationsGrid";
import ActivitiesGrid from "./ActivitiesGrid";
import "../styles/About.css";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: <EducationTimeline />,
  },
  {
    title: "Experience",
    id: "experience",
    content: <ExperienceTimeline />,
  },
  {
    title: "Courses",
    id: "certifications",
    content: <CertificationsGrid />,
  },
  {
    title: "Activities",
    id: "activities",
    content: <ActivitiesGrid />,
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        {/* First Row - Image and Text */}
        <Row className="align-items-center about-row">
          <Col md={6} className="about-img-col">
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  src={aboutImg}
                  alt="About me"
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                />
              )}
            </TrackVisibility>
          </Col>
          <Col md={6} className="about-text-col">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About Me</h2>
                  <p>
                    I am a Computer Science and Engineering student passionate
                    about full-stack development, UI/UX design, and emerging
                    technologies. I have hands-on experience building scalable
                    web applications using React, Node.js, Express, MongoDB, and
                    TailwindCSS, along with strong skills in creating
                    responsive, user-friendly interfaces. I am deeply interested
                    in exploring AI and Machine Learning to develop intelligent,
                    future-ready solutions.
                  </p>
                  <button className="resume-btn"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/sushmithashettigar/",
                        "_blank"
                      )
                    }
                  >
                    Resume
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        {/* Second Row - Centered Tabs */}
        <Row>
          <Col className="tabs-container">
            <Tab.Container id="about-tabs" defaultActiveKey="education">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                {TAB_DATA.map((tab) => (
                  <Nav.Item key={tab.id}>
                    <Nav.Link eventKey={tab.id}>{tab.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content>
                {TAB_DATA.map((tab) => (
                  <Tab.Pane key={tab.id} eventKey={tab.id}>
                    <div className="tab-contents">{tab.content}</div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
