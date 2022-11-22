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
                <div className={pageStyles.project}>
                <p className={pageStyles.text}><b>Client:</b> Northwestern Feinberg School of Medicine + Chicago Public Schools</p>
                <p className={pageStyles.text}><b>Challenge:</b> Find and address ways to improve their Student Health Leaders program 
                (designed for Chicago public school students interested in healthcare)</p>
                </div>

                <br/>
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
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Navigation made easy
                        </h3>
                        <p className={pageStyles.projectText}>
                        Based on our findings, we narrowed down the focus into reorganizing the content of the 
                        site and building a better navigation system. After making several site maps and getting 
                        user feedback, we came up with the final site map shown on the right. For comparison, the 
                        left is the original site map for the SHL website.
                        </p>
                        <img className={pageStyles.image} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976964/shl/sitemap1_ggryeb.png"} alt=""/>
                        <img className={pageStyles.image} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976963/shl/sitemap2_lfzxax.png"} alt=""/>
                    </div>
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Final mockups
                        </h3>
                        <p className={pageStyles.projectText}>
                        Although my team wanted to build mockups in Adobe XD or Figma, we decided using Squarespace 
                        would make it easier for the SHL team to implement our designs. Below are some screenshots 
                        from the final version of mockups we came up with.
                        </p>
                        <br/>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669089594/shl/home_qst3qs.png"} alt=""/>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669089627/shl/about_rspdxy.png"} alt=""/>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669089622/shl/support_shl_rq0zeu.png"} alt=""/>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669089624/shl/alumni_k90ux6.png"} alt=""/>
                    </div>
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            If we had more time. . .
                        </h3>
                        <p className={pageStyles.projectText}> • testing with other types of stakeholders such as workshop presenters and group leaders
                            <br/> • work with other teams in the class to better consolidate and integrate their findings
                            <br/> • build out prototype in Adobe XD or Figma to better showcase interactive components </p>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default SHL