import React from 'react'
import * as navbarStyles from '../styles/modules/navbar.module.less'

function Navbar() {
  return (
    <div className={navbarStyles.navbarContainer}>
      <a href="/" className={navbarStyles.link}>
        work
      </a>
      <a href="/play" className={navbarStyles.link}>
        play
      </a>
      <a href="/about" className={navbarStyles.link}>
        about
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
