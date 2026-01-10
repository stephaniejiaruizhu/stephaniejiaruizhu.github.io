import React, { useEffect, useState } from "react";
import MoonBlack from "../images/icons/moon-black.svg";
import MoonWhite from "../images/icons/moon-white.png";
import SunBlack from "../images/icons/sun-black.svg";
import SunWhite from "../images/icons/sun-white.png";
import Logo from "../images/logo-dark.png";
import LogoWhite from "../images/logo-light.png";
import "../styles/styles.less";

function ToggleButton() {
  const [toggleView, setToggleView] = useState(null);

  let dark = "#1F2A27";
  let light = "#EEEAE3";
  let green = "#d4df7d";
  let pink = "#ff15d8";
  let purple = "#e0bfda";
  let blue = "#0429fe";

  function CheckMode() {
    if (toggleView === null) {
      setToggleView("day");
    }

    if (localStorage.getItem("mode") === "day") {
      setToggleView("day");
      document.body.style.backgroundColor = light;
      document.body.style.color = dark;
      document
        .querySelectorAll("div.bookshelf-year")
        .forEach((title) => (title.style.color = blue));
      document
        .querySelectorAll("book-author")
        .forEach((title) => (title.style.color = pink));
      document
        .querySelectorAll(".book-author-2")
        .forEach((title) => (title.style.color = pink));
      document
        .querySelectorAll("div.active-marker")
        .forEach((marker) => (marker.style.backgroundColor = blue));
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = dark));
      document.getElementById("navbar-logo").src = Logo;
      document
        .querySelectorAll(".bm-burger-bars")
        .forEach((bar) => (bar.style.background = dark));
    } else if (localStorage.getItem("mode") === "night") {
      setToggleView("night");
      document.body.style.backgroundColor = dark;
      document.body.style.color = light;
      document
        .querySelectorAll(".book-author")
        .forEach((title) => (title.style.color = green));
      document
        .querySelectorAll(".book-author-2")
        .forEach((title) => (title.style.color = green));
      document
        .querySelectorAll("div.bookshelf-year")
        .forEach((title) => (title.style.color = purple));
      document
        .querySelectorAll("div.active-marker")
        .forEach((marker) => (marker.style.backgroundColor = purple));
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = light));
      document
        .querySelectorAll(".bm-burger-bars")
        .forEach((bar) => (bar.style.background = light));
      document.getElementById("navbar-logo").src = LogoWhite;
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
              .querySelectorAll(".book-author")
              .forEach((title) => (title.style.color = green)),
            document
              .querySelectorAll(".book-author-2")
              .forEach((title) => (title.style.color = green)),
            document
              .querySelectorAll("div.bookshelf-year")
              .forEach((title) => (title.style.color = purple)),
            document
              .querySelectorAll(".book-item-image")
              .forEach((title) => title.classList.add("hover")),
            document
              .querySelectorAll("div.active-marker")
              .forEach((marker) => (marker.style.backgroundColor = purple)),
            document
              .querySelectorAll("a")
              .forEach((link) => (link.style.color = light)),
            document
              .querySelectorAll(".bm-burger-bars")
              .forEach((bar) => (bar.style.background = light)),
            (document.getElementById("navbar-logo").src = LogoWhite),
            localStorage.setItem("mode", "night"))
          : (setToggleView("day"),
            (document.body.style.backgroundColor = light),
            (document.body.style.color = dark),
            document
              .querySelectorAll("div.bookshelf-year")
              .forEach((title) => (title.style.color = blue)),
            document
              .querySelectorAll(".book-author")
              .forEach((title) => (title.style.color = pink)),
            document
              .querySelectorAll(".book-author-2")
              .forEach((title) => (title.style.color = pink)),
            document
              .querySelectorAll(".book-item-image")
              .forEach((title) => title.classList.remove("hover")),
            document
              .querySelectorAll("div.active-marker")
              .forEach((marker) => (marker.style.backgroundColor = blue)),
            document
              .querySelectorAll("a")
              .forEach((link) => (link.style.color = dark)),
            (document.getElementById("navbar-logo").src = Logo),
            document
              .querySelectorAll(".bm-burger-bars")
              .forEach((bar) => (bar.style.background = dark)),
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
