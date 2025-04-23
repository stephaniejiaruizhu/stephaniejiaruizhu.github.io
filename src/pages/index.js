import React, { useEffect } from "react";
import "../styles/styles.less";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "./navbar";
import Footer from "./footer";
import Topper from "./topper";
import Work from "./work";

config.autoAddCss = false;

const IndexPage = () => {
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
