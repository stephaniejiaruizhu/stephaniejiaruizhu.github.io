import React from 'react'
import * as rightStyles from '../styles/modules/right.module.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function PrintRight() {
  return (
    <div className={rightStyles.wrapper}>
      <h1 className={rightStyles.intro}>
        Hey there! I'm Stephanie– sometimes journalist, sometimes designer,
        sometimes developer.
      </h1>
      <h2 className={rightStyles.subintro}>
        Always a storyteller. Currently making things at{' '}
        <a
          href="https://www.sfchronicle.com/author/stephanie-zhu/"
          target="_blank"
          rel="noreferrer"
        >
          San Francisco Chronicle.
        </a>
      </h2>

      <div className={rightStyles.menu}>
          <a className={`${rightStyles.menuButton}`} href="/home">Digital</a>
          <a className={`${rightStyles.menuButton} ${rightStyles.active}`} href="./">Print</a>
          <a className={`${rightStyles.menuButton}`} href="./">Other</a>
      </div>

      <div className={rightStyles.transition}>
        <p> selected projects </p>
        <FontAwesomeIcon className={rightStyles.arrow} icon={faArrowDown} />
      </div>
    </div>
  )
}

export default PrintRight
