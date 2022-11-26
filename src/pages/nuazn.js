import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuPrint from "./menuPrint"
import Footer from "./footer"
import Dropdown from "./dropdown"

function NUAZN () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuPrint/>
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
                        art-directing the fall 2020 magazine as well as designing parts of it. The theme for this issue was heritage as a bond to the past.
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
                            Although the meaning of heritage differs for everyone, it is undoubtedly a part of all of us. 
                            I wanted this magazine to reflect that similarity, so I created a style guide to establish the 
                            design direction.
                        </p>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668981580/nuazn/nuaznguide_un0xrb.png"} alt="cover of style guide created for the nuazn fall 2020 magazine"/>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668981568/nuazn/font_tdpxuz.png"} alt="typography page of style guide"/>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668981562/nuazn/color_wtwinm.png"} alt="color page of style guide"/>
                    </div>
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Parts of a whole
                        </h3>
                        <p className={pageStyles.projectText}>
                            This illustration I created for the cover represents 
                            the different aspects of our heritage through puzzle 
                            pieces. Only when these parts are pieced together,
                            do we get a more complete view of such a complicated 
                            part of our identity.
                        </p>
                        <img className={pageStyles.imageSmall} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668981641/nuazn/nuazn-cover_uhqmzr.png"} alt="illustration showing hands holding puzzle pieces"/>
                    </div>
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Putting it all together
                        </h3>
                        <p className={pageStyles.projectText}>
                            some pages of the magazine
                        </p>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668996677/nuazn/nuazncontents_lzxjjg.png"} alt="letter from the editor, masthead and table of contents pages"/>
                        <img className={pageStyles.media} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668996679/nuazn/angelisland_o4pqmz.png"} alt="layout of a piece about poetry on Angel Island"/>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default NUAZN
export const Head = () => <><title>Work/nuazn– Stephanie Zhu</title> <link rel="icon" href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"></link></>