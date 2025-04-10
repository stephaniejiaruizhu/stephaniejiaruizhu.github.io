import React from "react";
import Logo from "../images/logo.png"
import * as menuStyles from "../styles/modules/menu.module.less"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Menu () {
    return(
        <div>
            <img src={Logo} className={menuStyles.logo} alt="handwritten logo"/>
            <p className={menuStyles.intro}> (she/her). Welcome to my little corner of the internet.</p>
            <div className={menuStyles.iconContainer}>
                <a className={menuStyles.icon} aria-label="Github" href="https://github.com/stephaniejiaruizhu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a className={menuStyles.icon} aria-label="LinkedIn" href="https://www.linkedin.com/in/stephaniez2000/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className={menuStyles.icon} aria-label="Email" href="mailto:stephaniejiaruizhu.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </div>
    )
}

export default Menu