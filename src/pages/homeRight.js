import React from "react";
import * as rightStyles from "../styles/modules/right.module.less"

function Right () {
    return(
        <div>
            <h1 className={rightStyles.intro}>
                Hey there! I'm Stephanie– welcome to my little corner of the internet.
            </h1>
            <p className={rightStyles.transition}> selected work </p>
        </div>
    )
}

export default Right;