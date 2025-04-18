import React, { useState, useEffect } from "react";
import MoonBlack from "../images/icons/moon-black.svg";
import MoonWhite from "../images/icons/moon-white.png";
import SunBlack from "../images/icons/sun-black.svg";
import SunWhite from "../images/icons/sun-white.png";
import Logo from "../images/logo.png";
import LogoWhite from "../images/logo-white.png";
import "../styles/styles.less";

function ToggleButton() {
  const [toggleView, setToggleView] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("mode") : null
  );

  function ToggleMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document
      .querySelectorAll("a")
      .forEach((link) => (link.style.color = "black"));
    document
      .querySelectorAll(".bm-burger-bars")
      .forEach((bar) => (bar.style.background = "black"));
    document.getElementById("navbar-logo").src = Logo;
    localStorage.setItem("mode", "day");
  }

  useEffect(() => {
    window.addEventListener("load", ToggleMode);
    return () => window.removeEventListener("load", ToggleMode);
  });

  return (
    <div
      className="toggle"
      onClick={() =>
        toggleView === "day"
          ? (setToggleView("night"),
            localStorage.setItem("mode", "night"),
            (document.body.style.backgroundColor = "black"),
            (document.body.style.color = "white"),
            document
              .querySelectorAll("a")
              .forEach((link) => (link.style.color = "white")),
            document
              .querySelectorAll(".bm-burger-bars")
              .forEach((bar) => (bar.style.background = "white")),
            (document.getElementById("navbar-logo").src = LogoWhite))
          : (setToggleView("day"),
            localStorage.setItem("mode", "day"),
            (document.body.style.backgroundColor = "white"),
            (document.body.style.color = "black"),
            document
              .querySelectorAll("a")
              .forEach((link) => (link.style.color = "black")),
            (document.getElementById("navbar-logo").src = Logo),
            document
              .querySelectorAll(".bm-burger-bars")
              .forEach((bar) => (bar.style.background = "black")))
      }
    >
      <div
        className={toggleView === "day" ? "toggleitem active" : "toggleitem"}
      >
        {toggleView === "day" ? (
          <img
            className="toggle-icon"
            src={SunWhite}
            alt="icon showing sun in white"
          />
        ) : (
          <img
            className="toggle-icon"
            src={SunBlack}
            alt="icon showing sun in black"
          />
        )}
      </div>

      <div
        className={toggleView === "night" ? "toggleitem active" : "toggleitem"}
      >
        {toggleView === "night" ? (
          <img
            className="toggle-icon"
            src={MoonWhite}
            alt="icon showing moon and stars in white"
          />
        ) : (
          <img
            className="toggle-icon"
            src={MoonBlack}
            alt="icon showing moon and stars in black"
          />
        )}
      </div>
    </div>
  );
}

export default ToggleButton;
