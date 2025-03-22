import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div className="mainText" variants={textVariants}>
            <motion.h2 variants={textVariants}>Hy! I Am</motion.h2>
            <motion.h1 variants={textVariants}>Sushmitha Shettigar</motion.h1>
            <motion.p variants={textVariants}>
              Full Stack WebDeveloper | Programmer
            </motion.p>
          </motion.div>

          <motion.p variants={textVariants}>
            Bringing creativity to code and transforming ideas into reality.
            Let's build the future together!
          </motion.p>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>Resume</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Developer | Programmer | UI/UX Designer
      </motion.div>

      <div className="imageContainer">
        <img src="/image.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
