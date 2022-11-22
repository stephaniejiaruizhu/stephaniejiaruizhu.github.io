import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuProjects from "./menuProjects"
import Footer from "./footer"
import Dropdown from "./dropdown"

function Stickers () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuProjects/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <h2 className={pageStyles.title}> Stickers </h2>

                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Something new
                        </h3>
                        <p className={pageStyles.projectText}>
                            Quarantine made me bored– really, really bored. Inevitably I spent 75% of my day on Tiktok and the other 
                            25% rotating between eating and sleeping. My Etsy sticker shop was born out of the guilt I felt. So, 
                            I illustrated, printed and cut my own stickers.
                        </p>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669011403/nbn/cover_ssdj7l.png"} alt="cover of North by Northwestern Fall 2019 issue"/>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Stickers