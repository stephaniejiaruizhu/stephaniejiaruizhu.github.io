import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import * as footerStyles from '../styles/modules/footer.module.less'

const Footer = () => {
    <p className={footerStyles.footer}> Built with 
        <FontAwesomeIcon icon={faHeart} />
        in React.
    </p>
}

export default Footer