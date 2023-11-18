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
        I spent most of college doing print design.
      </h2>

      <div className={rightStyles.menu}>
        <a className={`${rightStyles.menuButton}`} href="/home">
          Digital
        </a>
        <a
          className={`${rightStyles.menuButton} ${rightStyles.active}`}
          href="./"
        >
          Print
        </a>
        <a className={`${rightStyles.menuButton}`} href="/other">
          Other
        </a>
      </div>

      <div className={rightStyles.transition}>
        <p> selected projects </p>
        <FontAwesomeIcon className={rightStyles.arrow} icon={faArrowDown} />
      </div>

      <div className={rightStyles.project}>
        <p className={rightStyles.projectNamePrint}>The Boston Globe</p>
        <p className={rightStyles.projectDescriptionPrint}>
          During the summer 2021, I was a design and graphics intern at The
          Boston Globe where I mostly designed for the Ideas section of the
          paper and front-of-book pages of the magazine. I also had the
          opportunity to work on sports graphics and make illustrations.
        </p>
        <div
          className={rightStyles.imageContainer}
          style={{ marginTop: '45px' }}
        >
          <img
            className={rightStyles.imageFlex}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976913/bostonglobe/newspaper1_jje9bj.png"
            alt="front page of The Boston Globe, July 11th, 2021 "
          />
          <img
            className={rightStyles.imageFlex}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976914/bostonglobe/newspaper2_xraxqg.png"
            alt="front page of the Address section, The Boston Globe, August 29th, 2021"
          />
        </div>
        <div className={rightStyles.imageContainer}>
          <img
            className={rightStyles.imageFlex}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976914/bostonglobe/newspaper3_bjsm4g.png"
            alt="Page K2 of the Ideas section, The Boston Globe, August 9th, 2021 "
          />
          <img
            className={rightStyles.imageFlex}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976914/bostonglobe/newspaper4_ou7eut.png"
            alt="Page K2 of the Ideas section, The Boston Globe, August 15th, 2021"
          />
        </div>
        <div className={rightStyles.imageContainer}>
          <img
            className={rightStyles.imageFlex}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976914/bostonglobe/mag1_der56w.png"
            alt="front-of-book page, The Boston Globe Magazine"
          />
          <img
            className={rightStyles.imageFlex}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668976913/bostonglobe/mag3_koqrbl.png"
            alt="front-of-book page, The Boston Globe Magazine"
          />
        </div>
        <img
          className={rightStyles.illustration}
          style={{ border: '1px solid black' }}
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669095426/bostonglobe/graphic2_udtlao.png"
          alt="Magazine design for North by Northwestern story: Tiktok on the clock"
        />
        <img
          className={rightStyles.illustration}
          style={{ border: '1px solid black' }}
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669095426/bostonglobe/graphic1_jfzco9.png"
          alt="Magazine design for North by Northwestern story: Tiktok on the clock"
        />
      </div>

      <div className={rightStyles.project}>
        <p className={rightStyles.projectNamePrint}>nuazn</p>
        <p className={rightStyles.projectDescriptionPrint}>
          As creative director of nuazn, an Asian-interest publication at
          Northwestern University, I was responsible for managing the design of the fall
          2020 magazine. I led a team of nine designers, illustrated the cover and designed 
          a couple of spreads.
        </p>
        <img
          className={rightStyles.illustration2}
          style={{ border: '1px solid black', marginTop: '30px' }}
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1700198618/nuazn/nuazn_cover_qo3g26.png"
          alt="Table of contents for nuazn magazine, The Heritage Issue"
        />
        <img
          className={rightStyles.illustration}
          style={{ border: '1px solid black' }}
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668996677/nuazn/nuazncontents_lzxjjg.png"
          alt="Table of contents for nuazn magazine, The Heritage Issue"
        />
        <img
          className={rightStyles.illustration}
          style={{ border: '1px solid black' }}
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1668996679/nuazn/angelisland_o4pqmz.png"
          alt="Table of contents for nuazn magazine, The Heritage Issue"
        />
      </div>

      <div className={rightStyles.project}>
        <p className={rightStyles.projectNamePrint}>North by Northwestern</p>
        <p className={rightStyles.projectDescriptionPrint}>
          I was creative director for North by Northwestern, my college's
          student-run print magazine in fall 2019, where I managed a team
          of five designers, two illustrators, an art director and a
          photographer. I also contributed as a writer, designer and assistant
          creative director in other years in addition to being an editor for
          the web team.
        </p>
        <img
          className={rightStyles.illustration}
          style={{ border: '1px solid black', marginTop: '30px' }}
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669506094/nbn/sheridan_fgc3tj.png"
          alt="Magazine design for North by Northwestern story: Soundtrack to Sheridan"
        />
        <img
          className={rightStyles.illustration}
          style={{ border: '1px solid black' }}
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669506089/nbn/redirected_lbhi6k.png"
          alt="Magazine design for North by Northwestern story: Redirected"
        />
        <img
          className={rightStyles.illustration}
          style={{ border: '1px solid black' }}
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669506095/nbn/tiktok_u5doqw.png"
          alt="Magazine design for North by Northwestern story: Tiktok on the clock"
        />
        <div className={rightStyles.imageContainer}>
          <img
            className={rightStyles.imageFlex}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669506095/nbn/threewords_af2bhq.png"
            alt="Magazine design for North by Northwestern story: Northwestern in three words"
          />
          <img
            className={rightStyles.imageFlex}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669506090/nbn/service_yb1kui.png"
            alt="Magazine design for North by Northwestern story: Out of service"
          />
        </div>
      </div>

      <p className={rightStyles.note}>Note: all illustrations on the page are done by me</p>
    </div>
  )
}

export default PrintRight
