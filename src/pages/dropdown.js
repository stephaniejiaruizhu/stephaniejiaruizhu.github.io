import React from 'react'
import { stack as Menu } from 'react-burger-menu'

function Dropdown() {
  return (
    <div className="menu">
      <Menu noOverlay>
        <a id="work" className="menu-item" href="/">
          work
        </a>
        <a id="play" className="menu-item" href="/play">
          play
        </a>
        <a id="about" className="menu-item" href="/about">
          about
        </a>
        <a
          id="resume"
          className="menu-item"
          href="https://drive.google.com/file/d/14UqsEhm815lGi23B1u8bk2DYyUGS-Cgh/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>
      </Menu>
    </div>
  )
}

export default Dropdown
