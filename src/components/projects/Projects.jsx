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
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.2,
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
          <img src="/urlshort.png" alt="" />
          <div className="contents">
            <h3>URL Shortener</h3>
            <p>
              Users get a shorter version, copy the shortened link, and track
              how many times it has been clicked.
            </p>
            <hr width={300} />
            <p>
              <b>Technology Used</b>
            </p>
            <div className="tags">
              <div className="tag">MERN</div>
              <div className="tag">Tailwind</div>
              <div className="tag">nonoid</div>
            </div>
            <div className="buttons">
              <button>
                <a
                  href="https://github.com/sushmithashettigar29/URL-Shortner"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/sushmithashettigar29/URL-Shortner"
                  target="_blank"
                >
                  Source Code
                </a>
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="pro-box"
          whileHover={{ backgroundColor: "orange" }}
        >
          <img src="/bidnow.png" alt="" />
          <div className="contents">
            <h3>BidNow</h3>
            <p>
              Enabled features like real-time bidding and admin panel
              management, optimizing the bidding process.
            </p>
            <hr width={300} />
            <p>
              <b>Technology Used</b>
            </p>
            <div className="tags">
              <div className="tag">Angular</div>
              <div className="tag">HTML</div>
              <div className="tag">CSS</div>
            </div>
            <div className="buttons">
              <button>
                <a
                  href="https://github.com/sushmithashettigar29/BidNow"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/sushmithashettigar29/BidNow"
                  target="_blank"
                >
                  Source Code
                </a>
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="pro-box"
          whileHover={{ backgroundColor: "orange" }}
        >
          <img src="/devconnect.png" alt="" />
          <div className="contents">
            <h3>DevConnect</h3>
            <p>
              DevConnect is a platform designed for developers to connect, share
              knowledge, and collaborate.
            </p>
            <hr width={300} />
            <p>
              <b>Technology Used</b>
            </p>
            <div className="tags">
              <div className="tag">MERN</div>
              <div className="tag">MUI</div>
            </div>
            <div className="buttons">
              <button>
                <a
                  href="https://github.com/sushmithashettigar29/DevConnect"
                  target="_blank"
                >
                  Live Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/sushmithashettigar29/DevConnect"
                  target="_blank"
                >
                  Source Code
                </a>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
