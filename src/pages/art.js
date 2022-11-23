import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuProjects from "./menuProjects"
import Footer from "./footer"
import Dropdown from "./dropdown"

function Art () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuProjects/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <h2 className={pageStyles.title}> Digital Art </h2>

                <div className={pageStyles.intro}>
                    <p className={pageStyles.projectText}>
                    </p>
                </div>

                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Static images
                        </h3>
                        <p className={pageStyles.projectText}>
                        </p>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669175775/play/digital/pokemon_gtjrop.jpg"} alt="illustration showing various water-themed Pokemon"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669176279/play/digital/SF2_zq5l0c.jpg"} alt="illustration showing San Francisco during the day"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669176281/play/digital/SF1_v0ouen.jpg"} alt="illustration showing San Francisco during the night"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669176279/play/digital/Spiderman1_pgqqiv.jpg"} alt="illustration showing San Francisco during the night"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669176280/play/digital/Spiderman2_zp2un8.jpg"} alt="illustration showing San Francisco during the night"/>
                    </div>

                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Animations
                        </h3>
                        <p className={pageStyles.projectText}>
                        </p>
                        <video className={pageStyles.video} autoplay controls>
                            <source src="https://res.cloudinary.com/dvjavf8xh/video/upload/v1669181161/play/digital/Aang_hx9rea.mp4" type="video/mp4"></source>
                        </video>
                        <video className={pageStyles.video} autoplay controls>
                            <source src="https://res.cloudinary.com/dvjavf8xh/video/upload/v1669181163/play/digital/San_Francisco_igjohp.mp4" type="video/mp4"></source>
                        </video>
                        <video className={pageStyles.video} autoplay controls>
                            <source src="https://res.cloudinary.com/dvjavf8xh/video/upload/v1669181170/play/digital/Spiderman__ei6rb1.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Art