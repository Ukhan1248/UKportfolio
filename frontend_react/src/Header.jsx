import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app_header app_flex">
      <motion.div
        whileInView={{ X: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 5 }}
        className="app_header-info"
      >
        <div className="app_header-badge">
          <div className="badge-cmp app_flex">
            <div style={{ marginLeft: 20 }}>
              <h1 className="head-text">Umair Khan's Portfolio Website</h1>
              <br />
              <h3>
                Hi There, Welcome to my portfolio website built using React.JS
                <br />
                framework and Sanity Backend
              </h3>
              <br />
              <h4>Take a look at my Work and Skills below</h4>
              <br />
              <h4>
                Also, please check out my Social media and GitHub links in the
                Contact section
              </h4>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      ></motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
