import React from "react";
import * as rightStyles from "../styles/modules/right.module.less";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function PrintRight () {
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
                <img className={rightStyles.cover} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976432/misc/bgcover_xhrtn5.jpg"} alt="cover showcasing a project done for Northwestern Feinberg School of Medicine"/>
                <p className={rightStyles.projectName}><a href="../bostonglobe">The Boston Globe → </a></p>
            </div>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976433/misc/nuazncover_oredqi.jpg"} alt="cover showcasing various projects done at San Francisco Chronicle."/>
                <p className={rightStyles.projectName}><a href="../nuazn">nuazn → </a></p>
            </div>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1669000283/misc/nbn_u4df8i.jpg"} alt="cover showcasing a project done for Northwestern Feinberg School of Medicine"/>
                <p className={rightStyles.projectName}><a href="../nbn">North by Northwestern → </a></p>
            </div>
            <div className={rightStyles.divider}/>
            <a href="../" className={rightStyles.seeMore}> back to digital work <span className={rightStyles.arrow}>→</span></a>
        </div>
    )
}

export default PrintRight