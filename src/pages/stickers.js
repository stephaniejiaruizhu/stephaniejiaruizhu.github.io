import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuPlay from "./menuPlay"
import Footer from "./footer"
import Dropdown from "./dropdown"
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Stickers () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuPlay/>
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
                        <LazyLoadImage className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494879/play/stickers/dino_a8qlip.jpg"} alt="stickers of the dinosaur mascot for the sticker shop"/>
                    </div>

                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            The product
                        </h3>
                        <p className={pageStyles.projectText}>
                            The one-man show: illustrating, printing and cutting all of the stickers. In order to keep engagement for my sticker shop up, I released new designs every two weeks. These are some of my favorites.
                        </p>
                        <LazyLoadImage className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494879/play/stickers/ramentaiyaki_xpwcrd.jpg"} alt="stickers featuring ramen and taiyaki"/>
                        <LazyLoadImage className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494879/play/stickers/spacedrinks_dehw4i.jpg"} alt="stickers featuring asian drinks with a space theme"/>
                        <LazyLoadImage className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/sticker_hp4k5g.jpg"} alt="stickers featuring the nintendo switch"/>
                        <LazyLoadImage className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669494880/play/stickers/vacation_ewtaug.jpg"} alt="stickers featuring dinosaur mascot in a jar"/>
                    </div>

                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            The result
                        </h3>
                        <p className={pageStyles.projectText}>
                            Although I could've done better on the art and the marketing, I was able to learn a lot from this experience from both a business and artistic
                            standpoint. Over the course of its lifetime, the sticker shop got around 700 sales (500 on Etsy and 200 elsewhere) and the Etsy bestseller designation.
                        </p>
                        <LazyLoadImage className={pageStyles.image} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669182747/play/stickers/dino_yum9cs.png"} alt="the dinosupplyco Etsy shop page"/>
                    </div>

                <Footer/>
            </div>
        </div>
    )
}

export default Stickers
export const Head = () => <><title>Play/Stickers– Stephanie Zhu</title> <link rel="icon" href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"></link></>