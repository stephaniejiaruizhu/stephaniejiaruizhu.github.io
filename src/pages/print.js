import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuProjects from "./menuProjects"
import Footer from "./footer"
import Dropdown from "./dropdown"

function Print () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuProjects/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <div className={pageStyles.project}>
                    <img className={pageStyles.image2} src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976432/misc/bgcover_xhrtn5.jpg" alt="cover showcasing various projects done at The Boston Globe"/>
                    <a href="./bostonglobe" className={pageStyles.link2}>The Boston Globe → </a>
                </div>
                <div className={pageStyles.project}>
                    <img className={pageStyles.image2} src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976433/nuazncover_oredqi.jpg" alt="cover showcasing the fall 2020 nuazn magazine "/>
                    <a href="./nuazn" className={pageStyles.link2}> nuazn → </a>
                </div>
                <div className={pageStyles.project}>
                    <img className={pageStyles.image2} src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669000283/misc/nbn_u4df8i.jpg" alt="cover showcasing projects done for North by Northwestern"/>
                    <a href="./nbn" className={pageStyles.link2}> North by Northwestern → </a>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Print