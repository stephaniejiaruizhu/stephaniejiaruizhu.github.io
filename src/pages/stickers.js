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

                <div className={pageStyles.intro}>
                    <p className={pageStyles.projectText}> Quarantine made me bored– really, really bored. Inevitably I spent 75% of my day on Tiktok and the other 
                        25% rotating between eating and sleeping. Eventually my hands started to itch and my brain kept telling me to make something; and so my sticker
                        shop was born. 
                    </p>
                </div>

                <div className={pageStyles.divider}/>

                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            The brand
                        </h3>
                        <p className={pageStyles.projectText}>
                            After doing some research <span className={pageStyles.strikethrough}>spending hours scrolling through Instagram</span>, I realized I needed a mascot to help my shop stand out.
                            Dinosaurs happened to be one of the only animals I could draw mildly well from memory so. . .
                        </p>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182796/play/dino2_vj7w13.jpg"} alt="stickers of the dinosaur mascot for the sticker shop"/>
                    </div>

                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            The product
                        </h3>
                        <p className={pageStyles.projectText}>
                            The one-man show: illustrating, printing and cutting all of the stickers. In order to keep engagement for my sticker shop up, I released new designs every two weeks. These are some of my favorites.
                        </p>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182167/play/stickers/RamenTaiyaki_nlyst9.jpg"} alt="stickers featuring ramen and taiyaki"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182183/play/stickers/Space_Drink_vqjiat.jpg"} alt="stickers featuring asian drinks with a space theme"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/sticker_hp4k5g.jpg"} alt="stickers featuring the nintendo switch"/>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182210/play/stickers/FullSizeRender_2_bkgu0p.jpg"} alt="stickers featuring dinosaur mascot in a jar"/>
                    </div>

                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            The result
                        </h3>
                        <p className={pageStyles.projectText}>
                            Although I could've done better on the art and the marketing, I was able to learn a lot from this experience from both a business and artistic
                            standpoint. Over the course of its lifetime, the sticker shop got around 700 sales (500 on Etsy and 200 elsewhere) and the Etsy bestseller designation.
                        </p>
                        <img className={pageStyles.image} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182747/play/dino_yum9cs.png"} alt="the dinosupplyco Etsy shop page"/>
                    </div>

                <Footer/>
            </div>
        </div>
    )
}

export default Stickers