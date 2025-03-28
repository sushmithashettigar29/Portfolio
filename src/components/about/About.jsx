import "./about.scss";
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

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="about">
      <motion.div
        className="aboutContent"
        variants={textVariants}
        initial="hidden"
        whileInView={isVisible ? "visible" : "hidden"}
      >
        <motion.h1 variants={textVariants}>About Me</motion.h1>
        <hr />
        <motion.p className="aboutPara" variants={textVariants}>
          Motivated Computer Science and Engineering student with strong web
          development, problem-solving, and teamwork skills. Experienced in full-stack development with ReactJS,
          Node.js, and MongoDB. Eager to contribute to high-impact projects and
          continue learning through hands-on challenges.
        </motion.p>

        <div className="education">
          <motion.div
            className="item"
            whileHover={{ backgroundColor: "#603914" }}
            variants={textVariants}
          >
            <div className="icon">
              <img src="/icon-edu.png" alt="" />
            </div>
            <div className="course">
              <h4 className="stream">
                Bachelor's of Engineering - Computer Science & Engineering
              </h4>
              <p className="college">
                Mangalore Institute of Technology & Engineering, Moodbidri{" "}
              </p>
            </div>
            <div className="yearMark">
              <h5>2022 - Present</h5>
              <h4>8.7 CGPA</h4>
            </div>
          </motion.div>
          <motion.div
            className="item"
            whileHover={{ backgroundColor: "#603914" }}
            variants={textVariants}
          >
            <div className="icon">
              <img src="/icon-edu.png" alt="" />
            </div>
            <div className="course">
              <h4 className="stream">Senior Secondary (12th)</h4>
              <p className="college">
                Government Pre University College Bailur
              </p>
            </div>
            <div className="yearMark">
              <h5>2021 - 2022</h5>
              <h4>95.33%</h4>
            </div>
          </motion.div>
          <motion.div
            className="item"
            whileHover={{ backgroundColor: "#603914" }}
            variants={textVariants}
          >
            <div className="icon">
              <img src="/icon-edu.png" alt="" />
            </div>
            <div className="course">
              <h4 className="stream">Secondary School (SSLC)</h4>
              <p className="college">
                Government Pre University College Bailur
              </p>
            </div>
            <div className="yearMark">
              <h5>2019 - 2020</h5>
              <h4>90.01%</h4>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="aboutImage">
        <img src="/about.png" alt="" />
      </div>
    </div>
  );
}

export default About;
