import React from 'react'
import * as menuStyles from '../styles/modules/menu.module.less'
import * as pageStyles from '../styles/modules/workpage.module.less'
import Navbar from './navbar'
import MenuProjects from './menuProjects'
import Footer from './footer'
import Dropdown from './dropdown'

function Oakes() {
  return (
    <div className={menuStyles.container}>
      <div className={menuStyles.leftContainer}>
        <Navbar />
        <MenuProjects />
      </div>
      <div className={menuStyles.rightContainer}>
        <Dropdown />
        <h2 className={pageStyles.title}>The Killing of Richard Oakes</h2>

        <div className={pageStyles.infoContainer}>
          <div className={pageStyles.leftContainer}>
            <p className={pageStyles.text}>
              For this project on the killing of Native-American Activist
              Richard Oakes, I took the Procreate animations made by the
              illustrator and recreated them using code. I also helped
              brainstorm and design the rest of the page.
            </p>
          </div>
          <div className={pageStyles.rightContainer}>
            <p className={pageStyles.text}>
              Time Frame: 3 weeks
              <div className={pageStyles.spacer} />
              Role: Animation, design, front-end development
              <div className={pageStyles.spacer} />
              Tools: React, Gatsby
            </p>
          </div>
        </div>

        <div className={pageStyles.divider} />

        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>Experimenting with Animation</h3>
          <p className={pageStyles.projectText}>
            Prior to this project, we had never done any complicated
            animations using only code, so I was tasked with doing research and
            building out a basic framework for these animations (cue the
            panicked internal screaming). I originally intended to use a React
            library, but opted to hard-code the animations instead because the
            library didn’t work well with our development rig and lacked certain
            features we wanted. Coding by 
          </p>
          <p className={pageStyles.projectText}>
            After a ton of poking around, refining and existing in debugging
            hell... we were able to create two layers of animation: one
            continuous and the other tied to user scroll.
          </p>
        </div>

        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>Reflection</h3>
          <p className={pageStyles.projectText}></p>
        </div>

        <div className={pageStyles.projectSection}>
          <p className={pageStyles.projectText}>
            Read the full story{' '}
            <a
              className={pageStyles.link}
              href="https://www.sfchronicle.com/projects/2023/richard-oakes-killing/"
              target="_blank"
              rel="noreferrer"
            >
              here.
            </a>
          </p>
        </div>

        <div className={pageStyles.projectSection}>
          <p className={pageStyles.paywallmessage}>
            Can't get past the paywall?{' '}
            <a
              className={pageStyles.link}
              href="mailto:stephaniejiaruizhu.com"
              target="_blank"
              rel="noreferrer"
            >
              Shoot me a message.
            </a>
          </p>
        </div>

        <div className={pageStyles.divider} />

        <Footer />
      </div>
    </div>
  )
}

export default Oakes
export const Head = () => (
  <>
    <title>Work/Oakes– Stephanie Zhu</title>{' '}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
)
