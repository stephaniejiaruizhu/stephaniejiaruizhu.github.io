import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/values.less";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a
          href="https://github.com/stephaniejiaruizhu"
          target="_blank"
          rel="noreferrer"
          className="footer-link-item"
        >
          Github
        </a>
        <a
          href="https://www.are.na/stephanie-zhu-fj3owohg-v4/index"
          target="_blank"
          rel="noreferrer"
          className="footer-link-item"
        >
          Are.na
        </a>
        <a
          href="https://www.linkedin.com/in/stephaniez2000/"
          target="_blank"
          rel="noreferrer"
          className="footer-link-item"
        >
          LinkedIn
        </a>
        <a
          href="https://drive.google.com/file/d/18M70mnP8zwlaeYKT_OTHmuGL10dkL5Vi/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="footer-link-item"
        >
          Resume
        </a>
      </div>
      <div className="footer-explanation" style={{ textAlign: "center" }}>
        Built with{" "}
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>{" "}
        in React. <br />
        [Last updated June 2025]
      </div>
    </div>
  );
}

export default Footer;
