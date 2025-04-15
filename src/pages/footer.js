import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <p className="footer-link-item">Github</p>
        <p className="footer-link-item">Are.na</p>
         <p className="footer-link-item">Resume</p>
        <p className="footer-link-item">LinkedIn</p>
      </div>
      <div className="footer-explanation">
        Built with <span><FontAwesomeIcon icon={faHeart}/></span> in React.
      </div>
    </div>
  )
}

export default Footer
