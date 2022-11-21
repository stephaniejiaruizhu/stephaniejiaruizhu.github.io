import React from "react";
import * as menuStyles from "../styles/modules/menu.module.less"
import * as playStyles from "../styles/modules/play.module.less"
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
              <div className={playStyles.imageContainer}>
                <img className={playStyles.image1} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/painting_rmnsuh.jpg"} alt=""/>
                <img className={playStyles.image2} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/sticker_hp4k5g.jpg"} alt=""/>
                <img className={playStyles.image3} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/digitalart_cjetma.jpg"} alt=""/>
                <img className={playStyles.image4} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/snapchat_gnu92q.jpg"} alt=""/>
              </div>
              <Footer/>
            </div>
          </div>
        </main>
      )
}

export default Play