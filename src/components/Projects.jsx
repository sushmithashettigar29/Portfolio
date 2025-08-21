import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import "../styles/Projects.css";

import aiSummImg from "../assets/img/aisumm.png";
import linkVistaImg from "../assets/img/linkvista.png";
import smartMarkImg from "../assets/img/smartmark.png";
import mindfulhealthImg from "../assets/img/mindfulhealth.png";
import caretrackImg from "../assets/img/caretrack.png";
import devconnectImg from "../assets/img/Devconnect.png";
import imagegenImg from "../assets/img/imagegen.png";

export const Projects = () => {
  const webProjects = [
    {
      title: "LinkVista - Smart URL Shortener with QR Code & Analytics",
      techStack:
        "MERN | Chart.js | qrcode | ip-api.com | Axios | JWT | bcryptjs",
      description:
        "LinkVista is a fullstack URL shortener built with React, Node.js, and MongoDB that lets users generate short, shareable links along with auto-generated QR codes. It also provides visual analytics such as device type, click count, and location using an intuitive dashboard.",
      liveLink: "https://link-vista.vercel.app/",
      githubLink: "https://github.com/sushmithashettigar29/LinkVista",
      image: linkVistaImg,
    },
    {
      title: "SmartMark",
      techStack:
        "React | Axios | Tailwind CSS | Node.js | Express | OpenAI API",
      description:
        "SmartMark is a full-stack personal bookmark manager that allows users to save, view, search, and delete bookmarks through a simple web interface or browser extension. It includes a FastAPI backend, Streamlit frontend, and a Chrome extension for quick bookmarking.",
      githubLink: "https://github.com/sushmithashettigar29/SmartMark",
      image: smartMarkImg,
    },
    {
      title: "MindfulHealth - Personal Wellness Tracker",
      techStack: "Streamlit | Pandas | Matplotlib| Seaborn | CSV file",
      description:
        "MindfulHealth is a beginner-friendly, fully interactive health tracker app built with Python and Streamlit. It helps users log and visualize their daily health habits—such as water intake, sleep, exercise, and mood—while offering calming mindfulness features like breathing exercises and motivational quotes.",
      githubLink:
        "https://github.com/sushmithashettigar29/mindful-health-tracker",
      image: mindfulhealthImg,
    },
    {
      title: "CareTrack - Hospital Management System",
      techStack: "ReactJS | TailwindCSS | Node.js | Express.js | MongoDB | JWT",
      description:
        "CareTrack is a user-friendly platform designed to simplify hospital interactions. Patients can register, book appointments, and manage medical records, while doctors can view appointments and medical histories — all from a unified interface.",
      githubLink: "https://github.com/sushmithashettigar29/CareTrack",
      image: caretrackImg,
    },
    {
      title: "DevConnect - A Developer Social Hub",
      techStack: "ReactJS | Node.js | Express.js | MongoDB | MUI",
      description:
        "DevConnect is a social networking platform designed for developers to connect, share knowledge, and collaborate. It provides essential features like user authentication, posts, comments, real-time chat, and resource sharing.",
      githubLink: "https://github.com/sushmithashettigar29/DevConnect",
      image: devconnectImg,
    },
    {
      title: "Image-Generator-Website",
      techStack: "HTML5 | CSS3 | JavaScript | Unsplash API",
      description:
        "This project is an Image Generator that allows users to search for images of their favorite animals (or any other query) and display the image along with a brief description. It uses the Unsplash API to fetch random images based on the user's search input.",
      liveLink: "https://image-generator-website.netlify.app/",
      githubLink:
        "https://github.com/sushmithashettigar29/Image-Generator-Website",
      image: imagegenImg,
    },
    {
      title: "Stop-Watch-Timer-App",
      techStack: "Flutter",
      description:
        "A simple and visually appealing Stopwatch Timer app built using Flutter. This app allows users to track time in hours, minutes, and seconds, with easy-to-use Start, Stop, and Reset buttons.",
      githubLink:
        "https://github.com/sushmithashettigar29/Stop-Watch-Timer-App",
      image: smartMarkImg,
    },
  ];

  const aimlProjects = [
    {
      title: "SummarizeIQ - AI-powered Text Summarization App",
      techStack:
        "React | Axios | Tailwind CSS | Node.js | Express | OpenAI API",
      description:
        "SummarizeIQ is an AI-powered text summarization app built using React (frontend) and Node.js + Express (backend). It uses OpenAI GPT-4o-mini to generate high-quality summaries of any text with options for short, medium, or detailed output.",
      githubLink: "https://github.com/sushmithashettigar29/SummarizeIQ",
      image: aiSummImg,
    },
  ];

  const uiuxProjects = [
    {
      title: "UI/UX Design Example",
      techStack: "Figma | Adobe XD",
      description:
        "A modern and responsive UI/UX design concept for a web platform.",
      liveLink: "#",
      githubLink: "#",
      image: smartMarkImg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p className="para">
                    Here are some of my featured projects showcasing my skills
                    in web development, mobile applications, and UI/UX design.
                    Each project represents different technologies and
                    challenges I've worked with.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">AI/ML</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">UI/UX Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {aimlProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {uiuxProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
