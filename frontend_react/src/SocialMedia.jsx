import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/Ukhan1243">
          <BsTwitter />
        </a>
        <br />
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
  );
}
