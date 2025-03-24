import "./about.scss";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about">
      <div className="aboutContent">
        <h1>About Me</h1>
        <hr />
        <p className="aboutPara">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
          consequatur repellendus, totam quo enim quibusdam obcaecati,
          necessitatibus magnam maiores temporibus possimus nulla velit eos
          quasi repellat ipsam blanditiis esse ex?
        </p>

        <div className="education">
          <motion.div className="item" whileHover={{backgroundColor:"#603914"}}>
            <div className="icon"><img src="/icon-edu.png" alt="" /></div>
            <div className="course">
              <h4 className="stream">Bachelor's of Engineering - Computer Science & Engineering</h4>
              <p className="college">Mangalore Institute of Technology & Engineering, Moodbidri </p>
            </div>
            <div className="yearMark">
              <h5>2022 - Present</h5>
              <h4>8.7 CGPA</h4>
            </div>
          </motion.div>
          <motion.div className="item" whileHover={{backgroundColor:"#603914"}}>
            <div className="icon"><img src="/icon-edu.png" alt="" /></div>
            <div className="course">
              <h4 className="stream">Senior Secondary (12th)</h4>
              <p className="college">Government Pre University College Bailur</p>
            </div>
            <div className="yearMark">
              <h5>2021 - 2022</h5>
              <h4>95.33%</h4>
            </div>
          </motion.div>
          <motion.div className="item" whileHover={{backgroundColor:"#603914"}}>
            <div className="icon"><img src="/icon-edu.png" alt="" /></div>
            <div className="course">
              <h4 className="stream">Secondary School (SSLC)</h4>
              <p className="college">Government Pre University College Bailur</p>
            </div>
            <div className="yearMark">
              <h5>2019 - 2020</h5>
              <h4>90.01%</h4>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="aboutImage">
        <img src="/about.png" alt="" />
      </div>
    </div>
  );
}

export default About;
