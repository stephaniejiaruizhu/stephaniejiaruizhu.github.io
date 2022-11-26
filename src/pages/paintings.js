import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuPlay from "./menuPlay"
import Footer from "./footer"
import Dropdown from "./dropdown"

function Paintings () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuPlay/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <h2 className={pageStyles.title}> Pantone Paintings </h2>

                    <div className={pageStyles.intro}>
                        <p className={pageStyles.projectText}> Another year of COVID, another passion project brought to you by boredom! I bought a pack of <a className={pageStyles.link} href="https://www.pantone.com/products/lifestyle/pantone-postcards" target="_blank" rel="noreferrer">pantone postcards</a> and 
                        embarked on a mission to paint all 100 of them. At this time, I'm still working my way through all 100 postcards and getting the technique down for gouache painting.
                        </p>
                    </div>

                    <div className={pageStyles.project}>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669271841/play/painting/IMG_5969_fjjvnk.jpg"} alt="painting of sand and waves on a beach"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669271841/play/painting/IMG_5972_gkecz1.jpg"} alt="painting of cherry blossoms and torii gate"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669271849/play/painting/IMG_5975_agtneg.jpg"} alt="painting of Califoria coast with poppies"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669271847/play/painting/IMG_5974_goigl5.jpg"} alt="painting of the Southern Air Temple from the cartoon Avatar the Last Airbender"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669271838/play/painting/IMG_5971_zpgph3.jpg"} alt="painting of rain on the window"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669271842/play/painting/IMG_5973_tn3avl.jpg"} alt="painting of stars in the sky"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669271847/play/painting/IMG_5977_arcmbh.jpg"} alt="painting of lake and lily pads"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669271847/play/painting/IMG_5976_p1hu7l.jpg"} alt="painting of boardwalk by a river"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669271847/play/painting/IMG_5978_bp0oqx.jpg"} alt="painting of barefoot girl holding an umbrella"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669271841/play/painting/IMG_5970_vu4pxc.jpg"} alt="painting of aspen trees in the fall"/>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Paintings
export const Head = () => <><title>Play/Pantone Paintings– Stephanie Zhu</title> <link rel="icon" href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"></link></>