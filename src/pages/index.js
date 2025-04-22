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
  let dark = "#212121";
  let light = "#f2f2f2";
  function CheckMode() {
    if (localStorage.getItem("mode") === "night") {
      document.body.style.backgroundColor = dark;
      document.body.style.color = light;
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = light));
      document
        .querySelectorAll(".bm-burger-bars")
        .forEach((bar) => (bar.style.background = light));
      document.getElementById("navbar-logo").src = LogoWhite;
    } else if (localStorage.getItem("mode") === "day") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = dark;
      document
        .querySelectorAll("a")
        .forEach((link) => (link.style.color = dark));
      document.getElementById("navbar-logo").src = Logo;
      document
        .querySelectorAll(".bm-burger-bars")
        .forEach((bar) => (bar.style.background = dark));
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
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Stephanie Zhu" />
    <meta
      property="og:description"
      content="Hey there, I’m Stephanie– professional pixel wrangler and bug maker. In other words, I'm a digital designer and front-end developer."
    />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/dvjavf8xh/image/upload/v1744958899/Screenshot_2025-04-17_at_11.47.32_PM_tpc3nu.png"
    />
    <meta property="og:url" content="https://stephaniejiaruizhu.com/" />
  </>
);
