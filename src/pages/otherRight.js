import React from 'react'
import * as rightStyles from '../styles/modules/right.module.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function OtherRight() {
  return (
    <div className={rightStyles.wrapper}>
      <h1 className={rightStyles.intro}>
        Hey there! I'm Stephanie– sometimes journalist, sometimes designer,
        sometimes developer.
      </h1>
      <h2 className={rightStyles.subintro}>
        And sometimes I do other things around the newsroom!
      </h2>

      <div className={rightStyles.menu}>
        <a className={`${rightStyles.menuButton}`} href="/home">
          Digital
        </a>
        <a className={`${rightStyles.menuButton}`} href="/print">
          Print
        </a>
        <a
          className={`${rightStyles.menuButton} ${rightStyles.active}`}
          href="./"
        >
          Other
        </a>
      </div>

      <div className={rightStyles.transition}>
        <p> selected projects </p>
        <FontAwesomeIcon className={rightStyles.arrow} icon={faArrowDown} />
      </div>

      <div className={rightStyles.project}>
        <p className={rightStyles.subTitle}>Illustration</p>
        <img
          className={rightStyles.illustration}
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1697431066/illos/doomloop_i2fje0.jpg"
          alt="illustration of San Francisco with a road spiraling downwards and cars falling off"
        />
        <img
          className={rightStyles.illustration}
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1697430819/illos/doomloop2_wppdks.jpg"
          alt="illustration of San Francisco on a hill with another hill full of wilted grass in front of it"
        />
         <img
          className={rightStyles.illustration2}
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1700206637/illos/napa_tsuof8.jpg"
          alt="illustration of a wine glass with a flagpole stuck in cork"
        />
      </div>

      <div className={rightStyles.project}>
        <p className={rightStyles.subTitle}>Reporting</p>
        <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/2024/sf-taiwan-food/"
          target="_blank"
          rel="noreferrer"
        >
          Taiwanese Food Guide
        </a>
        <a
          className={rightStyles.otherLink}
          href="https://datebook.sfchronicle.com/entertainment/crunchyroll-expo-2022-brings-characters-to-life-and-in-person-after-2-year-hiatus"
          target="_blank"
          rel="noreferrer"
        >
          Crunchyroll Expo 2022
        </a>
        <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/bayarea/article/Fatal-crashes-persisted-on-Bay-Area-roadways-16708064.php"
          target="_blank"
          rel="noreferrer"
        >
          Pandemic Traffic Fatalities
        </a>
      </div>
    </div>
  )
}

export default OtherRight
