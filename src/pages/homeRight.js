import React from "react";
import * as rightStyles from "../styles/modules/right.module.less"

function Right () {
    return(
        <div>
            <h1 className={rightStyles.intro}>
                Hey there! I'm <span className={rightStyles.name}>Stephanie</span>– I tell stories through design and code.
            </h1>
            <h2 className={rightStyles.subintro}>
                Currently tinkering at <a href="https://www.sfchronicle.com/author/stephanie-zhu/" target="_blank" rel="noreferrer">San Francisco Chronicle.</a>
            </h2>
            <p className={rightStyles.transition}> selected projects </p>
        </div>
    )
}

export default Right;