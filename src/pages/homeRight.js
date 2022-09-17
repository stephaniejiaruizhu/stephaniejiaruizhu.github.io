import React from "react";
import * as rightStyles from "../styles/modules/right.module.less";
import SFCover from "../images/sfchronicle.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";

function Right () {
    return(
        <div>
            <h1 className={rightStyles.intro}>
                Hey there! I'm Stephanie– I tell stories through design and code.
            </h1>
            <h2 className={rightStyles.subintro}>
                Currently tinkering at <a href="https://www.sfchronicle.com/author/stephanie-zhu/" target="_blank" rel="noreferrer">San Francisco Chronicle.</a>
            </h2>
            <p className={rightStyles.transition}> selected projects </p>
            <FontAwesomeIcon className={rightStyles.arrow} icon={faArrowDown}/>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={SFCover} alt="cover showcasing various projects done at San Francisco Chronicle."/>
                <a href="./sfchronicle"><p className={rightStyles.projectName}>San Francisco Chronicle → </p></a>
            </div>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={SFCover} alt="cover showcasing various projects done at San Francisco Chronicle."/>
                <a href="./sfchronicle"><p className={rightStyles.projectName}>The Boston Globe → </p></a>
            </div>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={SFCover} alt="cover showcasing various projects done at San Francisco Chronicle."/>
                <a href="./sfchronicle"><p className={rightStyles.projectName}>Student Health Leaders → </p></a>
            </div>
        </div>
    )
}

export default Right;