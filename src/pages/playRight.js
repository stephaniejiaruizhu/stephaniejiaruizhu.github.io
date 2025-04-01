import React from 'react'
import * as rightStyles from '../styles/modules/right.module.less'

function PlayRight() {
  return (
    <div className={rightStyles.wrapper}>
      <h2 className={`${rightStyles.subintro} ${rightStyles.playIntro}`}>
        My playground for...
      </h2>
      <h3 className={`${rightStyles.subintro} ${rightStyles.playIntro2}`}>
        trying things.  In college I got really burnt out and 
        design/coding didn't feel fun anymore. As a way to regain motivation, I started a challenge for myself:
        make or do something I care about every year and document it. Here's to the last six years!
      </h3>
      <div className={rightStyles.projectSection}>
        <div className={rightStyles.project}>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2024</p>
             <a
              className={rightStyles.otherLink}
              href="https://radial-earthquake-1a6.notion.site/Crochet-2de256b013e64a1e8135f194d8b3f7b9?pvs=4"
              target="_blank"
              rel="noreferrer"
            >
              Crochet
            </a>
            <a
              className={rightStyles.otherLink}
              href="https://radial-earthquake-1a6.notion.site/4f24f0cebf75461790256bb8330e2d6e?v=14054b0e5cfa47bf8c1022fe3a2d2caa&pvs=4"
              target="_blank"
              rel="noreferrer"
            >
              52 books in 52 weeks
            </a>
          </div>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2023</p>
             <a className={rightStyles.otherLink}
            href="https://radial-earthquake-1a6.notion.site/Polymer-Clay-Keycaps-c655e2bbdbe7488ebed42f473065d373"
            target="_blank"
            rel="noreferrer"
            >
              Polymer clay keycaps
            </a>
            <a className={rightStyles.otherLink}
            href="https://radial-earthquake-1a6.notion.site/3cbedcb19ec54bc39bb4863ba478a73a?v=86324806df93400ba9c0379eac623a9e"
            target="_blank"
            rel="noreferrer"
            >
              52 books in 52 weeks
            </a>
          </div>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2022</p>
            <a
              className={rightStyles.otherLink}
              href="https://www.notion.so/92bc0aa551bb49f1abad3e920d52bbc6?v=6838917851fb48ae8918e3c29b4025ec&pvs=4"
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
