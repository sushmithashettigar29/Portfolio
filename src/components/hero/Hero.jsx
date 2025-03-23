import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./hero.scss";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Manually trigger animation
  }, []);

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"} // Manually control animation
        >
          <motion.div className="mainText" variants={textVariants}>
            <motion.h2 variants={textVariants}>Hy! I Am</motion.h2>
            <motion.h1 variants={textVariants}>Sushmitha Shettigar</motion.h1>
            <motion.p variants={textVariants}>
              Full Stack Web Developer | Programmer
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
            whileInView="animate"
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
