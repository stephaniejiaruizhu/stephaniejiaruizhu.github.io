import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as aboutStyles from "../styles/modules/about.module.less"
import Navbar from "./navbar"
import Menu from "./menu"
import Footer from "./footer"
import Dropdown from "./dropdown"
import Headshot from "../images/headshot.jpg"

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
                    <img className={aboutStyles.photo} src={Headshot} alt="headshot of Stephanie"/>
                    <p className={aboutStyles.aboutText}>
                        <span className={aboutStyles.aboutBold}>Hey there, I'm Stephanie— sometimes journalist, sometimes designer, sometimes developer.</span>
                        <br/><br/>
                        Like every journalist ever, I tell people that I love telling stories.
                        <br/><br/>
                        But more specifically, I want to take the interviewing and narrative crafting skills I have learned to create experiences that evoke thought and emotion.
                        <br/><br/>
                        I'm a designer/developer at San Francisco Chronicle and a recent grad of Northwestern University where I studied journalism, computer science and design.
                        <br/><br/>
                        Currently: illustrating my own stickers, making crepe cakes and trying to avoid the wrath of my pet bird.
                        <br/><br/>
                        Let's Chat! :)
                    </p>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default About