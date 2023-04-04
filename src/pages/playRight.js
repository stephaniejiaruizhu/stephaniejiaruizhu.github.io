import React from "react";
import * as rightStyles from "../styles/modules/right.module.less";

function PlayRight () {
    return(
        <div>
            <h1 className={rightStyles.intro}>
                My playground. . .
            </h1>
            <h2 className={rightStyles.subintro}>
                a place for documenting the random things I try :)
            </h2>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/painting_rmnsuh.jpg"} alt="pantone paintings"/>
                <p className={rightStyles.projectName}><a href="../paintings">Pantone Paintings (Summer 2021) → </a></p>
            </div>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/sticker_hp4k5g.jpg"} alt="switch stickers"/>
                <p className={rightStyles.projectName}><a href="../stickers">Stickers (Summer 2020) → </a></p>
            </div>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/digitalart_cjetma.jpg"} alt="digital illustration of San Francisco inspired by the vaporwave aesthetic"/>
                <p className={rightStyles.projectName}><a href="../art">Digital Illustrations (Winter 2020) → </a></p>
            </div>
            <div className={rightStyles.projectSection}>
                <img className={rightStyles.cover} src={"https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976953/play/snapchat_gnu92q.jpg"} alt="snapchat geolfilters"/>
                <p className={rightStyles.projectName}><a href="../geofilters">Snapchat Geofilters (Winter 2019) → </a></p>
            </div>
        </div>
    )
}

export default PlayRight