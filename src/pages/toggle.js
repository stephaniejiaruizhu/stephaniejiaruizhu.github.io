import React, { useState, useEffect } from "react";
import MoonBlack from "../images/icons/moon-black.svg";
import MoonWhite from "../images/icons/moon-white.png";
import SunBlack from "../images/icons/sun-black.svg";
import SunWhite from "../images/icons/sun-white.png";
import Logo from "../images/logo.png";
import LogoWhite from "../images/logo-white.png";

function ToggleButton() {
  const [toggleView, setToggleView] = useState(() =>
    localStorage.getItem("mode")
  );

  function ToggleMode() {
    if (toggleView === "day") {
      setToggleView("night");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = "white"));
      document
        .querySelectorAll(".bm-burger-bars")
        .forEach((bar) => (bar.style.background = "white"));
      document.getElementById("navbar-logo").src = LogoWhite;
      localStorage.setItem("mode", "night");
      console.log(localStorage.getItem("mode"));
    } else if (toggleView === "night") {
      setToggleView("day");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = "black"));
      document.getElementById("navbar-logo").src = Logo;
      document
        .querySelectorAll(".bm-burger-bars")
        .forEach((bar) => (bar.style.background = "black"));
      localStorage.setItem("mode", "day");
      console.log(localStorage.getItem("mode"));
    }
  }

  return (
    <div className="toggle">
      <div
        className={toggleView === "day" ? "toggleitem active" : "toggleitem"}
        onClick={ToggleMode}
      >
        {toggleView === "day" ? (
          <img
            className="toggle-icon"
            src={SunWhite}
            alt="icon showing moon and stars"
          />
        ) : (
          <img
            className="toggle-icon"
            src={SunBlack}
            alt="icon showing moon and stars"
          />
        )}
      </div>

      <div
        className={toggleView === "night" ? "toggleitem active" : "toggleitem"}
        onClick={ToggleMode}
      >
        {toggleView === "night" ? (
          <img
            className="toggle-icon"
            src={MoonWhite}
            alt="icon showing moon and stars"
          />
        ) : (
          <img
            className="toggle-icon"
            src={MoonBlack}
            alt="icon showing moon and stars"
          />
        )}
      </div>
    </div>
  );
}

export default ToggleButton;
