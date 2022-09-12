import React from "react";
import Logo from "../images/logo.png"
import * as menuStyles from "../styles/modules/menu.module.less"

function Menu () {
    return(
        <div>
            <img src={Logo} className={menuStyles.logo} alt="handwritten logo"/>
            <p className={menuStyles.intro}>telling stories through empathetic design.</p>
        </div>
    )
}

export default Menu