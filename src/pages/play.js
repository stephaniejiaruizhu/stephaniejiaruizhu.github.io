import React, { useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.less";

function Play() {
  return (
    <div>
      <Navbar active="Play" />
      <div className="play-wrapper">
        <h3 className="play-title">My playground for. . .</h3>
        <p className="play-text">
          trying things. I got really burnt out in college. As a way to regain
          motivation, I started a challenge (inspired by a class I took) for
          myself: make or do something fun every year and document it. Here's to
          the last six years! <br />
          <br />
          <span>
            <FontAwesomeIcon
              icon={faHandPointer}
              style={{ paddingRight: "2px" }}
            />{" "}
            Click on an image to learn more.
          </span>
        </p>
        <div className="play-year-section">
          <h4 className="play-year">2025</h4>
          <div className="divider-vertical" />
          <h4 className="play-year">2024</h4>
          <div className="divider-vertical" />
          <h4 className="play-year">2023</h4>
          <div className="divider-vertical" />
          <h4 className="play-year">2022</h4>
          <div className="divider-vertical" />
          <h4 className="play-year">2021</h4>
          <div className="divider-vertical" />
          <h4 className="play-year">2020</h4>
          <div className="divider-vertical" />
          <h4 className="play-year">2019</h4>
          <a
            href="https://radial-earthquake-1a6.notion.site/Pantone-Paintings-e74fedab965a485d9e46390b004c121f"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/painting_rmnsuh.jpg"
              id="pantone"
              className="play-image"
              alt="nature scenes painted onto pantone postcards"
            />
          </a>
          <a
            href="https://radial-earthquake-1a6.notion.site/Sticker-Shop-c220e6fa87a84be8b90971010014ae11"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745351114/play/stickers_cf5yr8.jpg"
              id="stickers"
              className="play-image"
              alt="handmade stickers showing see-through boba and milk containers with space designs in them"
            />
          </a>
          <a
            href="https://radial-earthquake-1a6.notion.site/Snapchat-Geofilters-a3052aff6c9f4019b1fadd5deb2fd9b2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/snapchat_gnu92q.jpg"
              id="geofilters"
              className="play-image"
              alt="six geofilter designs made for Snapchat for the following locations: Lombard Street, Monterey, Chicago, Evanston, Gold Beach and Santa Monica"
            />
          </a>
          <a
            href="https://radial-earthquake-1a6.notion.site/92bc0aa551bb49f1abad3e920d52bbc6?v=6838917851fb48ae8918e3c29b4025ec"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745351114/play/2022_tbt4m2.png"
              id="books-1"
              className="play-image"
              alt="a notion table tracking books read in 2022"
            />
          </a>
          <a
            href="https://radial-earthquake-1a6.notion.site/3cbedcb19ec54bc39bb4863ba478a73a?v=86324806df93400ba9c0379eac623a9e"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745351113/play/2023_xdbx33.png"
              id="books-2"
              className="play-image"
              alt="a notion table tracking books read in 2023"
            />
          </a>
          <a
            href="https://radial-earthquake-1a6.notion.site/Polymer-Clay-Keycaps-c655e2bbdbe7488ebed42f473065d373"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745351115/play/keycaps_ndvt7u.jpg"
              id="keycaps"
              className="play-image"
              alt="keycap sculpted into the likeness of Totoro, a Studio Ghibli character"
            />
          </a>
          <a
            href="https://radial-earthquake-1a6.notion.site/4f24f0cebf75461790256bb8330e2d6e?v=14054b0e5cfa47bf8c1022fe3a2d2caa"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745351114/play/2024_gh411n.png"
              id="books-3"
              className="play-image"
              alt="a notion table tracking books read in 2024"
            />
          </a>
          <a
            href="https://radial-earthquake-1a6.notion.site/Crochet-2de256b013e64a1e8135f194d8b3f7b9"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745351116/play/crochet_azumsp.jpg"
              id="crochet"
              className="play-image"
              alt="crochet creation of a french goose wearing a beret and holding a baguette"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Play;

export const Head = () => (
  <>
    <title>Stephanie Zhu– Play</title>{" "}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
);
