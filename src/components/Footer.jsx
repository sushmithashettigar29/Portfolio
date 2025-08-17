import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import insta from "../assets/img/insta.svg";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-end">
          {" "}
          <Col xs={12} md={6} className="footer-left">
            <h2 className="logo">Sushmitha Shettigar</h2>
          </Col>
          <Col xs={12} md={6} className="footer-right">
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" />
              </a>
            </div>
            <p className="copyright">
              Copyright {new Date().getFullYear()}. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
