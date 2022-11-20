import React from "react";
import * as rightStyles from "../styles/modules/right.module.less";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Right () {
    return(
        <div>
            <h1 className={rightStyles.intro}>
                Hey there! I'm Stephanie– sometimes journalist, sometimes designer, sometimes developer.
            </h1>
            <h2 className={rightStyles.subintro}>
                Always a storyteller. Currently tinkering at <a href="https://www.sfchronicle.com/author/stephanie-zhu/" target="_blank" rel="noreferrer">San Francisco Chronicle.</a>
            </h2>
            <p className={rightStyles.transition}> selected projects </p>
            <FontAwesomeIcon className={rightStyles.arrow} icon={faArrowDown}/>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976726/sfchronicle_mogiyl.png"} alt="cover showcasing various projects done at San Francisco Chronicle."/>
                <p className={rightStyles.projectName}><a href="/sfchronicle">San Francisco Chronicle → </a></p>
            </div>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976432/bgcover_xhrtn5.jpg"} alt="cover showcasing various projects done at San Francisco Chronicle."/>
                <p className={rightStyles.projectName}><a href="./bostonglobe">The Boston Globe → </a></p>
            </div>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976432/shlcover_saaqz3.jpg"} alt="cover showcasing various projects done at San Francisco Chronicle."/>
                <p className={rightStyles.projectName}><a href="./shl">Student Health Leaders → </a></p>
            </div>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976433/nuazncover_oredqi.jpg"} alt="cover showcasing various projects done at San Francisco Chronicle."/>
                <p className={rightStyles.projectName}><a href="./nuazn"> nuazn → </a></p>
            </div>
        </div>
    )
}

export default Right