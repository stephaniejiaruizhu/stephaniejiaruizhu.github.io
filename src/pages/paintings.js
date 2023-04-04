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
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494150/play/painting/beach_ceszfe.jpg"} alt="painting of sand and waves on a beach"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494152/play/painting/cherryblossom_onmsaj.jpg"} alt="painting of cherry blossoms and torii gate"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494150/play/painting/cali_ve8zlv.jpg"} alt="painting of Califoria coast with poppies"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494160/play/painting/atla_bfdhmh.jpg"} alt="painting of the Southern Air Temple from the cartoon Avatar the Last Airbender"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494151/play/painting/rain_frtied.jpg"} alt="painting of rain on the window"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494151/play/painting/celestial_ltl1gn.jpg"} alt="painting of stars in the sky"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494151/play/painting/lilypad_uqu1nq.jpg"} alt="painting of lake and lily pads"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494146/play/painting/boardwalk_m2o9m3.jpg"} alt="painting of boardwalk by a river"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494153/play/painting/umbrella_zb9fvg.jpg"} alt="painting of barefoot girl holding an umbrella"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494150/play/painting/aspen_tpzzin.jpg"} alt="painting of aspen trees in the fall"/>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Paintings
export const Head = () => <><title>Play/Pantone Paintings– Stephanie Zhu</title> <link rel="icon" href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"></link></>