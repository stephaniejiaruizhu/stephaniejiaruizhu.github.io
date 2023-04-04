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
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669495611/play/snap/Lombard2_u4bvv7.jpg"} alt="geofilter of Lombard street"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669495611/play/snap/Evanston_hrsyik.jpg"} alt="geofilter of Evanston featuring Grosse Point Lighthouse"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669495611/play/snap/Monterey_yh3srq.jpg"} alt="geofilter of Monterey featuring jellyfish"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669495611/play/snap/Santa_Monica_ipbyb5.jpg"} alt="geofilter of Santa Monica Pier"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669495611/play/snap/Chicago_vxgzv3.jpg"} alt="geofiter of Chicago featuring the Navy Pier Centennial Wheel"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669495611/play/snap/Gold_Beach_zbaya5.jpg"} alt="geofilter of Gold Beach featuring Isaac Lee Patterson Bridge"/>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Geofilters
export const Head = () => <><title>Play/Geofilters– Stephanie Zhu</title> <link rel="icon" href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"></link></>