import React from "react";
import Logo from "../images/logo.png"
import * as menuStyles from "../styles/modules/menu.module.less"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function MenuPlay () {
    return(
        <div>
            <img src={Logo} className={menuStyles.logo} alt="handwritten logo"/>
            <div className={menuStyles.list}>
                <p className={menuStyles.listItem}> Pantone Paintings </p>
                <p className={menuStyles.listItem}> Stickers </p>
                <p className={menuStyles.listItem}> Digital Art </p>
                <p className={menuStyles.listItem}> Snapchat Geofilters </p>
            </div>
            <div className={menuStyles.iconContainer}>
                <a className={menuStyles.icon} aria-label="Github" href="https://github.com/stephaniejiaruizhu" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a className={menuStyles.icon} aria-label="Twitter" href="https://twitter.com/stephzhu_" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className={menuStyles.icon} aria-label="LinkedIn" href="https://www.linkedin.com/in/stephaniez2000/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className={menuStyles.icon} aria-label="Email" href="mailto:stephaniejiaruizhu.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </div>
    )
}

export default MenuPlay