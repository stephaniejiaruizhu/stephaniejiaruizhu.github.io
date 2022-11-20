import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuProjects from "./menuProjects"
import Footer from "./footer"
import Dropdown from "./dropdown"

function SF () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuProjects/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <h2 className={pageStyles.title}> San Francisco Chronicle</h2>

                <div className={pageStyles.infoContainer}>
                    <div className={pageStyles.leftContainer}>
                        <h3 className={pageStyles.subTitle}> Telling stories through code and design</h3>
                        <p className={pageStyles.text}> Using React, I wrote code to bring to life ideas I conceptualized and 
                        designed in Figma with the help of the data, design and development teams. </p>
                    </div>
                    <div className={pageStyles.rightContainer}>
                        <p className={pageStyles.text}>
                            Type: internship + full-time
                            <div className={pageStyles.spacer}/>
                            Role: Designer/Developer (full-time), Newsroom Developer (intern)
                            <div className={pageStyles.spacer}/>
                            Time Frame: September 2021 - Present
                        </p>
                    </div>
                </div>

                <div className={pageStyles.divider}/>

                <div className={pageStyles.project}>
                    <h3 className={pageStyles.subTitle}>
                        <a className={pageStyles.link} href="https://www.sfchronicle.com/projects/2022/bay-area-housing-power-players/" target="_blank" rel="noreferrer">
                        Who Owns All the Housing in the Bay Area? <span className={pageStyles.arrow}>→</span>
                        </a>
                        <p className={pageStyles.projectText}> Using React, I wrote code to bring to life ideas I conceptualized and 
                        designed in Figma with the help of the data, design and development teams. </p>
                    </h3> 
                    <img className={pageStyles.projectImgTablet} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976935/landlords_nxzxdv.png"} alt="ipad mockup of housing project"/>
                </div>

                <div className={pageStyles.project}>
                    <h3 className={pageStyles.subTitle}>
                        <a className={pageStyles.link} href="https://www.sfchronicle.com/projects/2022/napa-most-powerful-people/" target="_blank" rel="noreferrer">
                        Napa Power Players <span className={pageStyles.arrow}>→</span>
                        </a>
                        <p className={pageStyles.projectText}> Using React, I wrote code to bring to life ideas I conceptualized and 
                        designed in Figma with the help of the data, design and development teams. </p>
                    </h3>
                    <img className={pageStyles.projectImgDesktop} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976932/napa_llfxxh.png"} alt="laptop mockup of napa power players project"/>
                </div>

                <div className={pageStyles.project}>
                    <h3 className={pageStyles.subTitle}>
                        <a className={pageStyles.link} href="https://www.sfchronicle.com/projects/2022/chaat/" target="_blank" rel="noreferrer">
                            Bay Area Chaat Guide <span className={pageStyles.arrow}>→</span>
                        </a>
                        <p className={pageStyles.projectText}> Using React, I wrote code to bring to life ideas I conceptualized and 
                        designed in Figma with the help of the data, design and development teams. </p>
                    </h3>
                    <img className={pageStyles.projectImg} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976930/chaat_yvw1c3.png"} alt="phone mockup of chaat project"/>
                </div>

                <div className={pageStyles.divider}/>

                <div className={pageStyles.otherSection}>
                    <p className={pageStyles.subTitle2}>other projects:</p>
                    <a className={pageStyles.otherLink} href="https://www.sfchronicle.com/projects/2022/california-wildfire-severity-map/" target="_blank" rel="noreferrer">
                        Fire Burn Severity
                    </a>
                    <a className={pageStyles.otherLink} href="https://www.sfchronicle.com/projects/2022/sfnext-downtown-vision/" target="_blank" rel="noreferrer">
                        Reimagining San Francisco
                    </a>
                    <a className={pageStyles.otherLink} href="https://www.sfchronicle.com/projects/2022/good-good-culture-club-san-francisco-restaurants/" target="_blank" rel="noreferrer">
                        Good Good Culture Club
                    </a>
                    <a className={pageStyles.otherLink} href="https://www.sfchronicle.com/projects/2022/san-francisco-sros/" target="_blank" rel="noreferrer">
                        Broken Homes
                    </a>

                    <br/>
                    <p className={pageStyles.subTitle2}>reporting:</p>
                    <a className={pageStyles.otherLink} href="https://datebook.sfchronicle.com/entertainment/crunchyroll-expo-2022-brings-characters-to-life-and-in-person-after-2-year-hiatus" target="_blank" rel="noreferrer">
                        Crunchyroll Expo 2022
                    </a>
                    <a className={pageStyles.otherLink} href="https://www.sfchronicle.com/bayarea/article/Fatal-crashes-persisted-on-Bay-Area-roadways-16708064.php" target="_blank" rel="noreferrer">
                        Pandemic Traffic Fatalities
                    </a>
                </div>

                <Footer/>
            </div>
        </div>
    )
}

export default SF