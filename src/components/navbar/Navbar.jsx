import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sushmitha<span className="dot">.</span>
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/sushmithashettigar/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/sushmithashettigar29" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/sushmithas.______/"
            target="_blank"
          >
            <img src="/instagram.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
