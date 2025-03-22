import "./projects.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    scale: 0.5,
    opacity: 0,
    y: -50,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function Projects() {
  return (
    <motion.div
      className="projects"
      variants={textVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.h1 variants={textVariants}>Worked Projects</motion.h1>
      <motion.hr variants={textVariants} className="hr-line" />
      <motion.div
        className="pro-container"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={textVariants}
          className="pro-box"
          whileHover={{ backgroundColor: "orange" }}
        >
          <img src="/devconnect.png" alt="" />
          <h3>AI-Powered Resume Builder</h3>
          <p>
            Please add your content here. Keep it short and simple. And smile :)
          </p>
          <hr width={300} />
          <p>
            <b>Technology Used</b>
          </p>
          <div className="tags">
            <div className="tag">ReactJs</div>
            <div className="tag">NLP</div>
            <div className="tag">MERN</div>
          </div>
          <div className="buttons">
            <button>Live Demo</button>
            <button>Source Code</button>
          </div>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="pro-box"
          whileHover={{ backgroundColor: "orange" }}
        >
          <img src="/devconnect.png" alt="" />
          <h3>AI-Powered Resume Builder</h3>
          <p>
            Please add your content here. Keep it short and simple. And smile :){" "}
          </p>
          <hr width={300} />
          <p>
            <b>Technology Used</b>
          </p>
          <div className="tags">
            <div className="tag">ReactJs</div>
            <div className="tag">NLP</div>
            <div className="tag">MERN</div>
          </div>
          <div className="buttons">
            <button>Live Demo</button>
            <button>Source Code</button>
          </div>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="pro-box"
          whileHover={{ backgroundColor: "orange" }}
        >
          <img src="/devconnect.png" alt="" />
          <h3>AI-Powered Resume Builder</h3>
          <p>
            Please add your content here. Keep it short and simple. And smile :){" "}
          </p>
          <hr width={300} />
          <p>
            <b>Technology Used</b>
          </p>
          <div className="tags">
            <div className="tag">ReactJs</div>
            <div className="tag">NLP</div>
            <div className="tag">MERN</div>
          </div>
          <div className="buttons">
            <button>Live Demo</button>
            <button>Source Code</button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
