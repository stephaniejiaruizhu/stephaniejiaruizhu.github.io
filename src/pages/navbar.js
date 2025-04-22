import React from "react";
import ToggleButton from "./toggle";
import Logo from "../images/logo.png";
import { stack as Menu } from "react-burger-menu";
import "../styles/values.less";

function Navbar({ active }) {
  console.log(active);
  return (
    <div className="navbar">
      <a href="/">
        <img
          id="navbar-logo"
          className="navbar-logo"
          src={Logo}
          alt="handwritten logo saying 'Stephanie Zhu'"
        />
      </a>

      <a
        id="Work"
        className="navbar-item-desktop"
        href="/"
        style={
          active === "Work"
            ? { textDecorationLine: "line-through !important" }
            : { textDecoration: "none" }
        }
      >
        Work
      </a>
      <a
        id="Play"
        className="navbar-item-desktop"
        href="/play"
        style={
          active === "Play"
            ? { textDecoration: "line-through !important" }
            : { textDecoration: "none" }
        }
      >
        Play
      </a>
      <a
        id="About"
        className="navbar-item-desktop"
        href="/about"
        style={
          active === "About"
            ? { textDecoration: "line-through !important" }
            : { textDecoration: "none" }
        }
      >
        About
      </a>

      <ToggleButton className="navbar-item" />

      {/* burger menu */}
      <div className="menu-section-mobile">
        <Menu noOverlay>
          <a
            id="Work"
            className="navbar-item"
            href="/"
            style={
              active === "Work"
                ? { textDecoration: "line-through !important" }
                : { textDecoration: "none" }
            }
          >
            Work
          </a>
          <a
            id="Play"
            className="navbar-item"
            href="/play"
            style={
              active === "Play"
                ? { textDecoration: "line-through !important" }
                : { textDecoration: "none" }
            }
          >
            Play
          </a>
          <a
            id="About"
            className="navbar-item"
            href="/about"
            style={
              active === "About"
                ? { textDecoration: "line-through !important" }
                : { textDecoration: "none" }
            }
          >
            About
          </a>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
