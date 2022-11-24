import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuPrint from "./menuPrint"
import Footer from "./footer"
import Dropdown from "./dropdown"

function NBN () {
    return (
        <div className={menuStyles.container}>
            <div className={menuStyles.leftContainer}>
                <Navbar/>
                <MenuPrint/>
            </div>
            <div className={menuStyles.rightContainer}>
                <Dropdown/>
                <h2 className={pageStyles.title}> North by Northwestern </h2>

                <div className={pageStyles.infoContainer}>
                    <div className={pageStyles.leftContainer}>
                        <h3 className={pageStyles.subTitle}> Heritage– how do we represent 
                        something so nuanced in 46 pages?  </h3>
                        <p className={pageStyles.text}>
                            I was creative director for North by Northwestern in the fall of 2019, where I led an eight-person 
                            creative team consisting of designers, illustrators and photographers. I also did the design work 
                            shown below.
                        </p>
                    </div>
                    <div className={pageStyles.rightContainer}>
                        <p className={pageStyles.text}>
                            Type: student publication
                            <div className={pageStyles.spacer}/>
                            Role: creative direction, illustration, layout    
                            <div className={pageStyles.spacer}/>
                            Time Frame: Fall 2019
                        </p>
                    </div>
                </div>

                <div className={pageStyles.divider}/>
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Something new
                        </h3>
                        <p className={pageStyles.projectText}>
                            Cover images for North by Northwestern have traditionally been photographs, but I wanted to try 
                            something different for this issue. Inspired by The New Yorker magazine, I created an illustration 
                            in Procreate to use instead of the standard photo.
                        </p>
                        <img className={pageStyles.imageshadow} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669011403/nbn/cover_ssdj7l.png"} alt="cover of North by Northwestern Fall 2019 issue"/>
                    </div>
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Showing institutional flaws
                        </h3>
                        <p className={pageStyles.projectText}>
                            Through illustrations with imperfect lines and coloring, I represented the flaws of the student resource system at Northwestern University 
                            and the frustration that can be associated with seeking help.
                        </p>
                        <img className={pageStyles.imageshadow} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669011104/nbn/redirected_cmohrc.png"} alt="magazine page showing illustration of person with their face in their hands"/>
                    </div>
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            Changing the tone up
                        </h3>
                        <p className={pageStyles.projectText}>
                            Below is a lighter and funner piece giving song recommendations to jam to on a walk through university campus. 
                        </p>
                        <img className={pageStyles.imageshadow} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669010959/nbn/sheridan_bh1cgm.png"} alt="magazine page with illustrations of campus landmarks at Northwestern University"/>
                    </div>
                    <div className={pageStyles.project}>
                        <h3 className={pageStyles.subTitle}>
                            A bonus :)
                        </h3>
                        <p className={pageStyles.projectText}>
                            I directed a photoshoot for the first time and this photo is my absolute favorite:
                        </p>
                        <img className={pageStyles.imageshadow} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669010905/nbn/hedgehog_pz4b31.jpg"} alt="a hedgehog"/>
                    </div>

                    <div className={pageStyles.divider}/>

                    <div className={pageStyles.otherSection}>
                        <p className={pageStyles.subTitle2}>pages from other issues</p>
                        <img className={pageStyles.imageshadow} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669010938/nbn/threewords_qi56xe.png"} alt="magazine page showing student responses to describing Northwestern in three words"/>
                        <img className={pageStyles.imageshadow} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669010926/nbn/service_ngexsm.png"} alt="magazine page about campus workers that were laid off"/>
                        <img className={pageStyles.imageshadow} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669010995/nbn/tiktok_wibhmt.png"} alt="magazine page about TikTok"/>
                        <img className={pageStyles.imageshadow} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669010916/nbn/lacrosse_sd5lpz.png"} alt="magazine page about lacrosse"/>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default NBN
export const Head = () => <><title>Work/North by Northwestern– Stephanie Zhu</title> <link rel="icon" href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"></link></>