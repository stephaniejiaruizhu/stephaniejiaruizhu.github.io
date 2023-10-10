import React from "react"
import * as rightStyles from "../styles/modules/right.module.less"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

function Right () {
    return(
        <div>

            <h1 className={rightStyles.intro}>
                Hey there! I'm Stephanie– sometimes journalist, sometimes designer, sometimes developer.
            </h1>
            <h2 className={rightStyles.subintro}>
                Always a storyteller. Currently making things at <a href="https://www.sfchronicle.com/author/stephanie-zhu/" target="_blank" rel="noreferrer">San Francisco Chronicle.</a>
            </h2>

            <div className={rightStyles.menu}>
                <div className={rightStyles.menuButton}><a>Digital</a></div>
                <div className={rightStyles.menuButton}><a>Print</a></div>
                <div className={rightStyles.menuButton}><a>Illustration</a></div>
            </div>

            <p className={rightStyles.transition}> selected projects </p>
            <FontAwesomeIcon className={rightStyles.arrow} icon={faArrowDown}/>
        
            <div className={rightStyles.projectSection}>
            
                <img className={rightStyles.cover} src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1680414487/sros_ldcxmk.jpg" target="_blank" rel="noreferrer" alt="student health leaders project cover"/>
                <p className={rightStyles.projectName}>
                    <a href="./shl"> The Killing of Richard Oakes <span className={rightStyles.arrow}>→</span></a>
                </p>

            </div>

            <div className={rightStyles.divider}/>
            
            <div className={rightStyles.otherSection}>
                    <p className={rightStyles.subTitle2}>Other projects:</p>
                    <a className={rightStyles.otherLink} 
                        href="https://www.sfchronicle.com/projects/2023/sf-bay-area-rain-storm/" 
                        target="_blank" rel="noreferrer">
                        Stunt Cheerleading
                    </a>
                    <a className={rightStyles.otherLink} 
                        href="https://www.sfchronicle.com/projects/2022/california-wildfire-severity-map/" 
                        target="_blank" rel="noreferrer">
                        Who Owns All the Housing in the Bay Area?
                    </a>
                    <a className={rightStyles.otherLink} 
                        href="https://www.sfchronicle.com/projects/2022/sfnext-downtown-vision/" 
                        target="_blank" rel="noreferrer">
                        Fire Burn Severity
                    </a>
                    <a className={rightStyles.otherLink} 
                        href="https://www.sfchronicle.com/projects/2022/san-francisco-sros/" 
                        target="_blank" rel="noreferrer">
                        Bay Area Storm Map
                    </a>
            </div>

        </div>
    )
}

export default Right