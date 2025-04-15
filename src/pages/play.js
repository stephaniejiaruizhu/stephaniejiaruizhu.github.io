import React, { useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Logo from "../images/logo.png";
import LogoWhite from "../images/logo-white.png";

function Play() {
  function CheckMode() {
    if (localStorage.getItem("mode") === "night") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = "white"));
      document
        .querySelectorAll(".bm-burger-bars")
        .forEach((bar) => (bar.style.background = "white"));
      document.getElementById("navbar-logo").src = LogoWhite;
    } else if (localStorage.getItem("mode") === "night") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = "black"));
      document.getElementById("navbar-logo").src = Logo;
      document
        .querySelectorAll(".bm-burger-bars")
        .forEach((bar) => (bar.style.background = "black"));
    }
  }

  useEffect(CheckMode, []);

  return (
    <div>
      <Navbar active="Play" />
      <Footer />
    </div>
  );
}

export default Play;

export const Head = () => (
  <>
    <title>Play– Stephanie Zhu</title>{" "}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
);
