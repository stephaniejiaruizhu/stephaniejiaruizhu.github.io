import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuProjects from "./menuProjects"
import Footer from "./footer"
import Dropdown from "./dropdown"

function Geofilters () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuProjects/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <h2 className={pageStyles.title}> Snapchat Geofilters </h2>

                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Something new
                        </h3>
                        <p className={pageStyles.projectText}>
                            It was finals week. I should have been studying. But what did I do? I hopped onto Adobe Illustrator 
                            and made a series of Snapchat filters that I could use for next week's vacation. Since then, my filters have 
                            gotten some 460.6k uses and 33.7 million views. Here are the results.
                        </p>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669011403/nbn/cover_ssdj7l.png"} alt="cover of North by Northwestern Fall 2019 issue"/>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Geofilters