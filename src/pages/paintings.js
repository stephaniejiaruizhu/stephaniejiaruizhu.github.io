import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuProjects from "./menuProjects"
import Footer from "./footer"
import Dropdown from "./dropdown"

function Paintings () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuProjects/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <h2 className={pageStyles.title}> Pantone Paintings </h2>

                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Something new
                        </h3>
                        <p className={pageStyles.projectText}>
                            Another year of COVID, another passion project brought to you by boredom! 
                            I bought a pack of pantone postcards and embarked on a mission to paint all 
                            100 of them with gouache (which I still have limited understanding of how to use).
                        </p>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669011403/nbn/cover_ssdj7l.png"} alt="cover of North by Northwestern Fall 2019 issue"/>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Paintings