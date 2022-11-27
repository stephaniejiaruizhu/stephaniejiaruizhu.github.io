import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuPrint from "./menuPrint"
import Footer from "./footer"
import Dropdown from "./dropdown"
import { LazyLoadImage } from 'react-lazy-load-image-component'

function BG () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuPrint/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <h2 className={pageStyles.title}> The Boston Globe</h2>

                <div className={pageStyles.infoContainer}>
                    <div className={pageStyles.leftContainer}>
                        <h3 className={pageStyles.subTitle}> Creating graphics and illustrations with a quick turnaround</h3>
                        <p className={pageStyles.text}>During my internship, I got the chance to work 
                        on a variety of news products such as newspaper/magazine pages and sports graphics. Over the course of the summer,
                        I brushed up on my illustration and data design skills while learning how to keep up with the speedy pace of a 
                        newsroom.</p>
                    </div>
                    <div className={pageStyles.rightContainer}>
                        <p className={pageStyles.text}>
                            Type: internship
                            <div className={pageStyles.spacer}/>
                            Role: editorial design + illustration         
                            <div className={pageStyles.spacer}/>
                            Time Frame: June 2021 - August 2021
                        </p>
                    </div>
                </div>

                <div className={pageStyles.divider}/>

                <div className={pageStyles.project}>
                    <h3 className={pageStyles.subTitle}>
                        Newspaper pages
                    </h3>
                    <LazyLoadImage className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976913/bostonglobe/newspaper1_jje9bj.png"} alt="front page of The Boston Globe Sunday paper for July 11th, 2021"/>
                    <LazyLoadImage className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976914/bostonglobe/newspaper2_xraxqg.png"} alt="front page of the Address section of The Globe for August 29th, 2021"/>
                    <LazyLoadImage className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976914/bostonglobe/newspaper3_bjsm4g.png"} alt="page in the Ideas section of The Globe"/>
                    <LazyLoadImage className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976914/bostonglobe/newspaper4_ou7eut.png"} alt="page in the Ideas section of The Globe"/>
                </div>

                <div className={pageStyles.project}>
                    <h3 className={pageStyles.subTitle}>
                        Magazine pages
                    </h3>

                    <LazyLoadImage className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976914/bostonglobe/mag1_der56w.png"} alt="page in The Boston Globe Magazine featuring an illustration done by Zhu"/>
                    <LazyLoadImage className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976913/bostonglobe/mag2_glbxxq.png"} alt="page showing events happening in Boston from 8/30 - 9/12"/>
                    <LazyLoadImage className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976913/bostonglobe/mag3_koqrbl.png"} alt="page showing events happening in Boston from 7/19 - 7/25"/>
                </div>

                <div className={pageStyles.project}>
                    <h3 className={pageStyles.subTitle}>
                       Sports graphics
                    </h3>
                    <LazyLoadImage className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669095426/bostonglobe/graphic2_udtlao.png"} alt="page in The Boston Globe Magazine featuring an illustration done by Zhu"/>
                    <LazyLoadImage className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669095426/bostonglobe/graphic1_jfzco9.png"} alt="page showing events happening in Boston from 8/30 - 9/12"/>
                    <LazyLoadImage className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669095426/bostonglobe/graphic3_iarjlq.png"} alt="page showing events happening in Boston from 7/19 - 7/25"/>
                </div>

                <Footer/>
            </div>
        </div>
    )
}

export default BG
export const Head = () => <><title>Work/The Boston Globe– Stephanie Zhu</title> <link rel="icon" href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"></link></>