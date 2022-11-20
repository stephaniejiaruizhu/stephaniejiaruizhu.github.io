import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuProjects from "./menuProjects"
import Footer from "./footer"
import Dropdown from "./dropdown"

function NUAZN () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuProjects/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <h2 className={pageStyles.title}> nuazn </h2>

                <div className={pageStyles.infoContainer}>
                    <div className={pageStyles.leftContainer}>
                        <h3 className={pageStyles.subTitle}> Heritage– how do we represent 
                        something so nuanced in 46 pages?  </h3>
                        <p className={pageStyles.text}>
                        As creative director of nuazn, an Asian-interest publication at Northwestern University, I was responsible for 
                        art-directing and designing parts of the fall 2020 magazine. The theme for this issue was heritage as a bond to the past.
                        </p>
                    </div>
                    <div className={pageStyles.rightContainer}>
                        <p className={pageStyles.text}>
                            Type: student publication
                            <div className={pageStyles.spacer}/>
                            Role: art direction, layout, illustration      
                            <div className={pageStyles.spacer}/>
                            Time Frame: Fall 2020
                        </p>
                    </div>
                </div>

                <div className={pageStyles.divider}/>
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            A uniform style
                        </h3>
                        <p className={pageStyles.projectText}>
                        </p>
                    </div>
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Parts of a whole
                        </h3>
                    </div>
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Representing challenges
                        </h3>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default NUAZN