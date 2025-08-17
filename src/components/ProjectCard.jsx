import { Col } from "react-bootstrap";
import "../styles/ProjectCard.css";

export const ProjectCard = ({
  title,
  techStack,
  description,
  liveLink,
  githubLink,
  image,
}) => {
  return (
    <Col xs={12} sm={6} md={4} className="project-card">
      <div className="project-card-static">
        <img
          src={image}
          alt={`${title} illustration`}
          className="project-illustration"
        />

        <div className="project-card-content">
          <h4 className="project-title">{title}</h4>
          {techStack && <p className="project-tech">{techStack}</p>}
          <p className="project-description">{description}</p>

          <div className="project-buttons">
            {githubLink && (
              <a
                href={githubLink}
                className="project-btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                className="project-btn live"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
