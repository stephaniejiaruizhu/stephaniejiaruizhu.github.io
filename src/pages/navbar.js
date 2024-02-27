import React from 'react'
import * as navbarStyles from '../styles/modules/navbar.module.less'

function Navbar({active}) {
  return (
    <div className={navbarStyles.navbarContainer}>
      <a href="/" className={navbarStyles.link}>
      <span className={active === "work" ? navbarStyles.strikethrough : null}>
        work
      </span>
      </a>
      <a href="/play" className={navbarStyles.link}>
      <span className={active === "play" ? navbarStyles.strikethrough : null}>
        play
      </span>
      </a>
      <a href="/about" className={navbarStyles.link}>
      <span className={active === "about" ? navbarStyles.strikethrough : null}>
        about
      </span>
      </a>
      <a
        href="https://drive.google.com/file/d/14UqsEhm815lGi23B1u8bk2DYyUGS-Cgh/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className={navbarStyles.link}
      >
        resume
      </a>
    </div>
  )
}

export default Navbar
