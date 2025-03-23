import "./services.scss";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

function Services() {
  // const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div className="textContainer" variants={textVariants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={textVariants}>
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
      <motion.div className="listContainer" variants={textVariants}>
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
