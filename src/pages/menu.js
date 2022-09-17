import React from "react";
import Logo from "../images/logo.png"
import * as menuStyles from "../styles/modules/menu.module.less"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Menu () {
    return(
        <div>
            <img src={Logo} className={menuStyles.logo} alt="handwritten logo"/>
            <p className={menuStyles.intro}> Welcome to my little corner of the internet.</p>
            <div className={menuStyles.iconContainer}>
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
        </div>
    )
}

export default Menu