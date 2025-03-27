import "./Certificates.scss";
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

function Certificates() {
  return (
    <motion.div
      className="certificates"
      variants={textVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.h1 variants={textVariants}>Certificates</motion.h1>
      <motion.hr variants={textVariants} />
      <motion.div className="card-container" variants={containerVariants}>
        <motion.div className="certi-card" whileHover={{ scale: 1.2 }}>
          <img src="/css-battle.png" alt="Certificate" />
        </motion.div>{" "}
        <motion.div className="certi-card" whileHover={{ scale: 1.2 }}>
          <img src="/webdev.png" alt="Certificate" />
        </motion.div>{" "}
        <motion.div className="certi-card" whileHover={{ scale: 1.2 }}>
          <img src="/fusion-hack.png" alt="Certificate" />
        </motion.div>{" "}
        <motion.div className="certi-card" whileHover={{ scale: 1.2 }}>
          <img src="/uiux.png" alt="Certificate" />
        </motion.div>{" "}
        <motion.div className="certi-card" whileHover={{ scale: 1.2 }}>
          <img src="/developher.png" alt="Certificate" />
        </motion.div>{" "}
        <motion.div className="certi-card" whileHover={{ scale: 1.2 }}>
          <img src="/mongodb.png" alt="Certificate" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Certificates;
