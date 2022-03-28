import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="app__footer-cards">
        <h2 className="head-text">Contact Info:</h2>

        <div className="app__footer-card1">
          <img src={images.email} alt="email" />
          <a href="mailto:umairkhan814@icloud.com" className="p-text">
            umairkhan814@icloud.com
          </a>

          <div className="app__social">
            <div>
              <a href="https://twitter.com/Ukhan1243" className="p-text">
                <BsTwitter />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/umair-k-1a6002210/">
                <BsLinkedin />
              </a>
            </div>
            <div>
              <a href="https://github.com//Ukhan1248">
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app_footer"),
  "contact",
  "app_whitebag"
);
