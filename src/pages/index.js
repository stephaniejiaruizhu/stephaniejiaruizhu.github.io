import * as React from "react";
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
      <Navbar />
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
