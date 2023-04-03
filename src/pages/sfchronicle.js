import React from "react"
import * as menuStyles from "../styles/modules/menu.module.less"
import * as pageStyles from "../styles/modules/workpage.module.less"
import Navbar from "./navbar"
import MenuProjects from "./menuProjects"
import Footer from "./footer"
import Dropdown from "./dropdown"
import { LazyLoadImage } from 'react-lazy-load-image-component'

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
                        <p className={pageStyles.text}>As an intern on the development team,
                        I created interactive projects, digital designs and data-driven stories using React.
                        I now do much of the same work for the newsroom's digital
                        design team.</p>
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
                        <a className={pageStyles.link} href="https://www.sfchronicle.com/projects/2023/flour-water-pasta/" target="_blank" rel="noreferrer">
                            Pasta Dictionary  <span className={pageStyles.arrow}>→</span>
                        </a>
                    </h3>
                    <p className={pageStyles.projectText}>A browseable encyclopedia of 50 pasta shapes (with pop-up cards and an interactive map of Italy) and a deeper look into six of them</p>
                    <img className={pageStyles.projectImg} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1680499287/sfchronicle/pasta_risxcj.png"} alt="phone mockup of the pasta dictionary project"/>
                </div>

                <div className={pageStyles.project}>
                    <h3 className={pageStyles.subTitle}>
                        <a className={pageStyles.link} href="https://www.sfchronicle.com/projects/2022/san-francisco-sros-overdoses/" target="_blank" rel="noreferrer">
                            Overdose Deaths in SF's Housing Program  <span className={pageStyles.arrow}>→</span>
                        </a>
                    </h3>
                    <p className={pageStyles.projectText}>One San Francisco minister keeps memorial books where friends and family can leave messages for those who died in the city's supportive housing program.
                    I digitalized actual messages written in these memorial books and animated them for this piece on SF's overdose crisis.</p>
                    <img className={pageStyles.projectImgDesktop} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1671248598/sfchronicle/sros_t4u7ov.png"} alt="laptop mockup of the overdose deaths project"/>
                </div>

                <div className={pageStyles.project}>
                    <h3 className={pageStyles.subTitle}>
                        <a className={pageStyles.link} href="https://www.sfchronicle.com/projects/2022/sf-transamerica-pyramid/" target="_blank" rel="noreferrer">
                        The Future of the Transamerica Pyramid <span className={pageStyles.arrow}>→</span>
                        </a>
                    </h3>
                    <p className={pageStyles.projectText}> The Transamerica Pyramid had its 50th anniversary recently. This piece takes a look at the past, and more importantly, the
                    future of the iconic structure. The focus of the design is on drone footage and photographs from the newsroom's visual team as well as the contrast between past and
                    present.</p>
                    <LazyLoadImage className={pageStyles.projectImgTablet} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669271808/sfchronicle/Pyramid_jtojwk.png"} alt="ipad mockup of the Transamerica Pyramid project"/>
                </div>

                <div className={pageStyles.project}>
                    <h3 className={pageStyles.subTitle}>
                        <a className={pageStyles.link} href="https://www.sfchronicle.com/projects/2022/bay-area-housing-power-players/" target="_blank" rel="noreferrer">
                        Who Owns All the Housing in the Bay Area? <span className={pageStyles.arrow}>→</span>
                        </a>
                    </h3>
                    <p className={pageStyles.projectText}> The Chronicle combed through millions of unique property records and found which power players control the Bay 
                    Area's real estate. Because there's so much content to present, I designed and developed a navigation bar as well as other features to make the dense 
                    information more digestible.</p>
                    <LazyLoadImage className={pageStyles.projectImgTablet} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976935/sfchronicle/landlords_nxzxdv.png"} alt="ipad mockup of the Bay Area landlord project"/>
                </div>

                <div className={pageStyles.project}>
                    <h3 className={pageStyles.subTitle}>
                        <a className={pageStyles.link} href="https://www.sfchronicle.com/projects/2022/napa-most-powerful-people/" target="_blank" rel="noreferrer">
                        Napa Power Players <span className={pageStyles.arrow}>→</span>
                        </a>
                    </h3>
                    <p className={pageStyles.projectText}> New power players join already established ones in Napa's changing wine industry. For this project,
                    I created illustrations and a flipcard for each power player in addition to the topper image.</p>
                    <LazyLoadImage className={pageStyles.projectImgDesktop} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976932/sfchronicle/napa_llfxxh.png"} alt="laptop mockup of Napa power players project"/>
                </div>

                <div className={pageStyles.project}>
                    <p className={pageStyles.projectText}>Check out this <a className={pageStyles.link} href="https://drive.google.com/drive/folders/180de8yEG0FSO4yGBgwI-xh9QIz9iyrc1?usp=sharing" target="_blank" rel="noreferrer">folder</a>
                    with screen recordings of each project if the paywall can't be bypassed. 
                    </p>
                </div>

                <div className={pageStyles.divider}/>

                <div className={pageStyles.otherSection}>
                    <p className={pageStyles.subTitle2}>other projects:</p>
                    <a className={pageStyles.otherLink} href="https://www.sfchronicle.com/projects/2023/sf-bay-area-rain-storm/" target="_blank" rel="noreferrer">
                        Bay Area Storm Map
                    </a>
                    <a className={pageStyles.otherLink} href="https://www.sfchronicle.com/projects/2022/california-wildfire-severity-map/" target="_blank" rel="noreferrer">
                        Fire Burn Severity
                    </a>
                    <a className={pageStyles.otherLink} href="https://www.sfchronicle.com/projects/2022/sfnext-downtown-vision/" target="_blank" rel="noreferrer">
                        Reimagining San Francisco
                    </a>
                    <a className={pageStyles.otherLink} href="https://www.sfchronicle.com/projects/2022/san-francisco-sros/" target="_blank" rel="noreferrer">
                        Broken Homes
                    </a>
                    <a className={pageStyles.otherLink} href="https://www.sfchronicle.com/projects/2022/chaat/" target="_blank" rel="noreferrer">
                        Bay Area Chaat Guide
                    </a>

                    <br/>
                    <p className={pageStyles.subTitle2}>illustrations:</p>
                    <LazyLoadImage className={pageStyles.illo} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1680499653/sfchronicle/doomloop0330_gr_zkxb3t.jpg"} alt="illustration of cars driving along a road spiraling downwards around SF buildings"/>
                    <LazyLoadImage className={pageStyles.illo} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1680500000/sfchronicle/Empire_Builders_uydh97.jpg"} alt="illustration of a glass of wine with a cork stabbed by a flag floating in it"/>

                    <br/><br/>
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
export const Head = () => <><title>Work/SF Chronicle– Stephanie Zhu</title> <link rel="icon" href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"></link></>