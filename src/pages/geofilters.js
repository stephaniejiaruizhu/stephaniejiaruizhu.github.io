import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuPlay from "./menuPlay"
import Footer from "./footer"
import Dropdown from "./dropdown"

function Geofilters () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuPlay/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <h2 className={pageStyles.title}> Snapchat Geofilters </h2>

                <div className={pageStyles.intro}>
                    <p className={pageStyles.projectText}>  It was finals week. I should have been studying. But what did I do? I hopped onto Adobe Illustrator 
                        and made a series of Snapchat filters that I could use for next week's vacation. Since then, my filters have 
                        gotten some 460.6k uses and 33.7 million views. Here are the results.
                    </p>
                </div>

                    <div className={pageStyles.project}>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182978/play/snap/Lombard3_si8zpc.jpg"} alt="cover of North by Northwestern Fall 2019 issue"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182978/play/snap/Evanston2_ieriwj.jpg"} alt="cover of North by Northwestern Fall 2019 issue"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182976/play/snap/Monterey2_eanv3o.jpg"} alt="cover of North by Northwestern Fall 2019 issue"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182980/play/snap/Santa_Monica_q3ehyn.jpg"} alt="cover of North by Northwestern Fall 2019 issue"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182978/play/snap/Chicago2_agrysl.jpg"} alt="cover of North by Northwestern Fall 2019 issue"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182976/play/snap/Gold_Beach2_tpfxu4.jpg"} alt="cover of North by Northwestern Fall 2019 issue"/>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Geofilters
export const Head = () => <><title>Play/Geofilters– Stephanie Zhu</title> <link rel="icon" href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"></link></>