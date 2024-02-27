import React from 'react'
import * as rightStyles from '../styles/modules/right.module.less'

function PlayRight() {
  return (
    <div className={rightStyles.wrapper}>
      <h2 className={`${rightStyles.subintro} ${rightStyles.playIntro}`}>
        My playground for...
      </h2>
      <h3 className={`${rightStyles.subintro} ${rightStyles.playIntro2}`}>
        documenting the random things I try. In college I started a challenge
        for myself: work on something fun every year. It's been five years since
        then and we're still going! This page is my way of staying creatively
        motivated and a reminder to keep learning.
      </h3>
      <div className={rightStyles.projectSection}>
        <div className={rightStyles.project}>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2023</p>
            <p className={rightStyles.otherLink2}>
              Polymer clay keycaps (coming soon)
            </p>
            <p className={rightStyles.otherLink2}>
              52 books in 52 weeks (coming soon)
            </p>
          </div>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2022</p>
            <a
              className={rightStyles.otherLink}
              href="https://radial-earthquake-1a6.notion.site/52-Books-in-52-Weeks-2022-a7c4fe2d9a554c029bd4af725a22a592?pvs=4"
              target="_blank"
              rel="noreferrer"
            >
              52 books in 52 weeks
            </a>
          </div>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2021</p>
            <a
              className={rightStyles.otherLink}
              href="https://radial-earthquake-1a6.notion.site/Pantone-Paintings-e74fedab965a485d9e46390b004c121f?pvs=4"
              target='_blank'
              rel="noreferrer"
            >
              Pantone paintings
            </a>
          </div>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2020</p>
            <a
              className={rightStyles.otherLink}
              href="https://radial-earthquake-1a6.notion.site/Sticker-Shop-c220e6fa87a84be8b90971010014ae11?pvs=4"
              target="_blank"
              rel="noreferrer"
            >
              Sticker shop
            </a>
          </div>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2019</p>
            <a
              className={rightStyles.otherLink}
              href="https://radial-earthquake-1a6.notion.site/Snapchat-Geofilters-a3052aff6c9f4019b1fadd5deb2fd9b2?pvs=4"
              target="_blank"
              rel="noreferrer"
            >
              Snapchat geofilters
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayRight
