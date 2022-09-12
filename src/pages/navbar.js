import React from "react";
import  * as navbarStyles from "../styles/modules/navbar.module.less"

function Navbar () {
    return(
        <div className={navbarStyles.navbarContainer}>
            <a href="/" className={navbarStyles.link}>work</a>
            <a href="/" className={navbarStyles.link}>play</a>
            <a href="/" className={navbarStyles.link}>about</a>
            <a href="https://drive.google.com/file/d/1sXXvIjqpciXud7wQvtqfMNJxJBrDALyS/view?usp=sharing"
               target="_blank"
               rel="noreferrer"
               className={navbarStyles.link}>
                resume
            </a>
        </div>
    )
}

export default Navbar