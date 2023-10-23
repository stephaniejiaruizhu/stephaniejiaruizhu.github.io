import React from 'react'
import * as rightStyles from '../styles/modules/right.module.less'

function PlayRight() {
  return (
    <div className={rightStyles.wrapper}>
      <h2 className={`${rightStyles.subintro} ${rightStyles.playIntro}`}>
        My playground for...
      </h2>
      <h3 className={`${rightStyles.subintro} ${rightStyles.playIntro2}`}>
        documenting the random things I try.
        In college I started a challenge for myself: work on something fun every year.
        It's been five years since then and we're still going! This page is my way of staying
        creatively motivated and a reminder that it's ok to take risks and fail.
      </h3>
      <div className={rightStyles.projectSection}>
        <div className={rightStyles.project}>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2023</p>
            <a className={rightStyles.otherLink} href="">
              Polymer clay keycaps
            </a>
            <a className={rightStyles.otherLink} href="">
              52 books in 52 weeks
            </a>
          </div>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2022</p>
            <a className={rightStyles.otherLink} href="">
              52 books in 52 weeks
            </a>
          </div>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2021</p>
            <a className={rightStyles.otherLink} href="">
              Pantone paintings
            </a>
          </div>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2020</p>
            <a className={rightStyles.otherLink} href="">
              Sticker shop
            </a>
            <a className={rightStyles.otherLink} href="">
              Digital art
            </a>
          </div>
          <div className={rightStyles.playProjectContainer}>
            <p className={rightStyles.year}>2019</p>
            <a className={rightStyles.otherLink} href="">
              Snapchat geofilters
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayRight
