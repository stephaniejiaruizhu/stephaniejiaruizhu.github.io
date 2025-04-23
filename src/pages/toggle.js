import React, { useEffect, useState } from "react";
import MoonBlack from "../images/icons/moon-black.svg";
import MoonWhite from "../images/icons/moon-white.png";
import SunBlack from "../images/icons/sun-black.svg";
import SunWhite from "../images/icons/sun-white.png";
import Logo from "../images/logo.png";
import LogoWhite from "../images/logo-white.png";
import "../styles/styles.less";

function ToggleButton() {
  const [toggleView, setToggleView] = useState(null);

  let dark = "#212121";
  let light = "#f2f2f2";

  function CheckMode() {
    if (toggleView === null) {
      setToggleView("day");
    }

    if (localStorage.getItem("mode") === "day") {
      setToggleView("day");
    } else if (localStorage.getItem("mode") === "night") {
      setToggleView("night");
    }
  }

  useEffect(CheckMode, []);

  return (
    <div
      className="toggle"
      onClick={() =>
        toggleView === "day"
          ? (setToggleView("night"),
            (document.body.style.backgroundColor = dark),
            (document.body.style.color = light),
            document
              .querySelectorAll("a")
              .forEach((link) => (link.style.color = light)),
            document
              .querySelectorAll(".bm-burger-bars")
              .forEach((bar) => (bar.style.background = light)),
            (document.getElementById("navbar-logo").src = LogoWhite),
            localStorage.setItem("mode", "night"))
          : (setToggleView("day"),
            (document.body.style.backgroundColor = "white"),
            (document.body.style.color = "black"),
            document
              .querySelectorAll("a")
              .forEach((link) => (link.style.color = "black")),
            (document.getElementById("navbar-logo").src = Logo),
            document
              .querySelectorAll(".bm-burger-bars")
              .forEach((bar) => (bar.style.background = "black")),
            localStorage.setItem("mode", "day"))
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
