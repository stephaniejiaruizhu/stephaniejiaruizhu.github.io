import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuProjects from "./menuProjects"
import Footer from "./footer"
import Dropdown from "./dropdown"

function SHL () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuProjects/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <h2 className={pageStyles.title}> Student Health Leaders</h2>

                <div className={pageStyles.infoContainer}>
                    <div className={pageStyles.leftContainer}>
                        <h3 className={pageStyles.subTitle}> How might we turn the program website into <b>the</b> place to find information? </h3>
                        <p className={pageStyles.text}> SHL has a website packed with information, but after user interviews, we noticed one common problem: 
                        stakeholders tend to turn to word-of-mouth instead of the website for key details about the program. My team and I wanted to find out why.</p>
                    </div>
                    <div className={pageStyles.rightContainer}>
                        <p className={pageStyles.text}>
                            Type: capstone project for service design class
                            <div className={pageStyles.spacer}/>
                            Role: user research, ux design
                            <div className={pageStyles.spacer}/>
                            Team Members: Daniella Asapokhai, David Yoon         
                            <div className={pageStyles.spacer}/>
                            Time Frame: October 2020 - March 2021
                        </p>
                    </div>
                </div>

                <div className={pageStyles.divider}/>
                <Footer/>
            </div>
        </div>
    )
}

export default SHL