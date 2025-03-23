import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const ref = useRef();
  // const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people-image" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <motion.button whileHover={{ backgroundColor: "white" }}>
            WHAT WE DO?
          </motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "white", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam hic
            maxime commodi mollitia. Dolore temporibus atque non ipsa maiores!{" "}
          </p>
          <motion.button whileHover={{ width: 250 }}>Order Now</motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "white", color: "black" }}
        >
          <h2>UI/UX Design</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam hic
            maxime commodi mollitia. Dolore temporibus atque non ipsa maiores!{" "}
          </p>
          <motion.button whileHover={{ width: 250 }}>Order Now</motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "white", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam hic
            maxime commodi mollitia. Dolore temporibus atque non ipsa maiores!{" "}
          </p>
          <motion.button whileHover={{ width: 250 }}>Order Now</motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
