import "./resume.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="resume">
      <motion.div
        className="resumeContent"
        variants={textVariants}
        initial="hidden"
        whileInView={isVisible ? "visible" : "hidden"}
      >
        <motion.h1 variants={textVariants}>Technologies I Work With</motion.h1>
        <hr className="tech-hr" />
        <motion.div className="techContainer" variants={textVariants}>
          <motion.div className="box" variants={textVariants}>
            <img src="/html.png" alt="" />
            <h6>HTML</h6>
          </motion.div>
          <motion.div className="box" variants={textVariants}>
            <img src="/css.png" alt="" />
            <h6>CSS</h6>
          </motion.div>
          <motion.div className="box" variants={textVariants}>
            <img src="/js.png" alt="" />
            <h6>JS</h6>
          </motion.div>
          <motion.div className="box" variants={textVariants}>
            <img src="/reactjs.png" alt="" />
            <h6>ReactJs</h6>
          </motion.div>
          <motion.div className="box" variants={textVariants}>
            <img src="/mongo.png" alt="" />
            <h6>MongoDB</h6>
          </motion.div>
          <motion.div className="box" variants={textVariants}>
            <img src="/nodejs.png" alt="" />
            <h6>NodeJs</h6>
          </motion.div>
          <motion.div className="box" variants={textVariants}>
            <img src="/express.png" alt="" />
            <h6>Express</h6>
          </motion.div>
          <motion.div className="box" variants={textVariants}>
            <img src="/angular.png" alt="" />
            <h6>Angular</h6>
          </motion.div>
          <motion.div className="box" variants={textVariants}>
            <img src="/java.png" alt="" />
            <h6>Java</h6>
          </motion.div>
          <motion.div className="box" variants={textVariants}>
            <img src="/figma.png" alt="" />
            <h6>Figma</h6>
          </motion.div>
        </motion.div>
        <motion.h1 variants={textVariants}>Experience</motion.h1>
        <hr className="exp-hr" />
        <div className="expContainer">
          <motion.div className="expbox" variants={textVariants}>
            <div className="icon">
              <img src="/job.png" alt="" />
            </div>
            <div className="detail">
              <h6>Nov - Dec 2024</h6>
              <h4 className="company">Infosys Springboard</h4>
              <p className="position">Angular Full-stack Intern</p>
              <ul>
                <li>
                  Developing the front-end of the BidNow platform using Angular,
                  focusing on creating interactive and dynamic user interfaces.{" "}
                </li>
                <li>
                  Implementing real-time updates and enhancing user engagement
                  for a seamless auction experience.{" "}
                </li>
                <li>
                  Collaborating with team members to optimize UI/UX design and
                  ensure responsiveness across devices.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="resumeImage">
        <img src="/resumepage.png" alt="" />
        <motion.button
          whileHover={{ backgroundColor: "white", color: "black" }}               onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1AJXULRluOQJ0slTPWkQpWsJ0r2AdZFNZ/view?usp=sharing"
            )
          }
        >
          Download Resume
        </motion.button>
      </div>
    </div>
  );
}

export default Resume;
