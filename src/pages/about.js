import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as aboutStyles from "../styles/modules/about.module.less"
import Navbar from "./navbar"
import Menu from "./menu"
import Footer from "./footer"
import Dropdown from "./dropdown"
import { LazyLoadImage } from 'react-lazy-load-image-component'

function About () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <Menu/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <div className={aboutStyles.container}>
                    <LazyLoadImage className={aboutStyles.photo} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976957/misc/headshot_ocpspr.jpg"} alt="headshot of Stephanie"/>
                    <p className={aboutStyles.aboutText}>
                        <span className={aboutStyles.aboutBold}>Hey there, I'm Stephanie.</span>
                        <br/><br/>
                        Like every journalist ever, I tell people that I love telling stories.
                        <br/><br/>
                        But more specifically, I want to take the interviewing and narrative crafting skills I have learned to create experiences that evoke thought and bring joy.
                        <br/><br/>
                        I'm a designer/developer at San Francisco Chronicle and a recent grad of Northwestern University where I studied journalism, computer science and design.
                        <br/><br/>
                        Currently: reading <a className={aboutStyles.link} href = "https://www.goodreads.com/book/show/20518872-the-three-body-problem" target="_blank" rel="noreferrer">The Three-Body Problem</a>, making <a className={aboutStyles.link} href="https://drive.google.com/file/d/1-X4GVwfTkegKZvFFuy3Nk88jiwTaLDUk/view?usp=sharing" target="_blank" rel="noreferrer">crepe cakes</a>, learning <a href="https://www.blender.org/download/" className={aboutStyles.link} rel="noreferrer" target="_blank">3D modeling</a> and trying to avoid the wrath of my pet <a className={aboutStyles.link} href="https://drive.google.com/file/d/1Hz77t3LvaCYS1mAWo_BP4tAe2HhB8W3L/view?usp=sharing" target="_blank" rel="noreferrer">bird</a>.
                        <br/><br/>
                        Let's <a className={aboutStyles.link} href="mailto:stephaniejiaruizhu.com" target="_blank" rel="noreferrer">chat</a>! :)
                    </p>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default About

export const Head = () => <><title>About</title> <link rel="icon" href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"></link></>