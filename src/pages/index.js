import React, { useEffect } from "react";
import "../styles/styles.less";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "./navbar";
import Footer from "./footer";
import Topper from "./topper";
import Work from "./work";
import Logo from "../images/logo.png";
import LogoWhite from "../images/logo-white.png";

config.autoAddCss = false;

const IndexPage = () => {
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
    <main>
      <Navbar active="Work" />
      <Topper />
      <Work />
      <Footer />
    </main>
  );
};

export default IndexPage;
export const Head = () => (
  <>
    <title>Stephanie Zhu</title>{" "}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
);
