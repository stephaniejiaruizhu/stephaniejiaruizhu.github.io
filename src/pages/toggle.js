import React, { useEffect, useState } from "react";
import MoonBlack from "../images/icons/moon-dark.webp";
import MoonWhite from "../images/icons/moon-light.webp";
import SunBlack from "../images/icons/sun-dark.webp";
import SunWhite from "../images/icons/sun-light.webp";
import Logo from "../images/logo-dark.png";
import LogoWhite from "../images/logo-light.png";
import "../styles/styles.less";

function ToggleButton() {
  const [toggleView, setToggleView] = useState(null);

  function CheckMode() {
    if (toggleView === null) {
      setToggleView("light");
      document.body.setAttribute("data-theme", "light");
      document.getElementById("navbar-logo").src = Logo;
    }

    if (localStorage.getItem("mode") === "light") {
      setToggleView("light");
      document.body.setAttribute("data-theme", "light");
      document.getElementById("navbar-logo").src = Logo;
    }

    if (localStorage.getItem("mode") === "dark") {
      setToggleView("dark");
      document.body.setAttribute("data-theme", "dark");
      document.getElementById("navbar-logo").src = LogoWhite;
    }
  }

  useEffect(CheckMode, [toggleView]);

  return (
    <div
      className="toggle"
      onClick={() =>
        toggleView === "light"
          ? (setToggleView("dark"),
            localStorage.setItem("mode", "dark"),
            document.body.setAttribute("data-theme", "dark"))
          : (setToggleView("light"),
            localStorage.setItem("mode", "light"),
            document.body.setAttribute("data-theme", "light"))
      }
    >
      <div
        className={toggleView === "light" ? "toggleitem active" : "toggleitem"}
      >
        {toggleView === "light" ? (
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
        className={toggleView === "dark" ? "toggleitem active" : "toggleitem"}
      >
        {toggleView === "dark" ? (
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
