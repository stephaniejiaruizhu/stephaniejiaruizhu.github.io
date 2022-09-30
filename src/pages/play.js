import React from "react";
import * as menuStyles from "../styles/modules/menu.module.less"
import Navbar from "./navbar";
import Menu from "./menu";
import Dropdown from "./dropdown";
import Footer from "./footer";

function Play () {
    return (
        <main>
          <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
              <Navbar/>
              <Menu/>
            </div>
            <div className={menuStyles.rightContainer}>
              <Dropdown/>
              <Footer/>
            </div>
          </div>
        </main>
      )
}

export default Play