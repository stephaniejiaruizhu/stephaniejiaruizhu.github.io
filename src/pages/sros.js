import React from 'react'
import * as menuStyles from '../styles/modules/menu.module.less'
import * as pageStyles from '../styles/modules/workpage.module.less'
import Navbar from './navbar'
import MenuProjects from './menuProjects'
import Footer from './footer'
import Dropdown from './dropdown'

function SROS() {
  return (
    <div className={menuStyles.container}>
      <div className={menuStyles.leftContainer}>
        <Navbar />
        <MenuProjects active="sros"/>
      </div>
      <div className={menuStyles.rightContainer}>
        <Dropdown />
        <h2 className={pageStyles.title}>
          Overdose Deaths in SF's Housing Program
        </h2>

        <div className={pageStyles.infoContainer}>
          <div className={pageStyles.leftContainer}>
            <p className={pageStyles.text}>
              San Francisco restaurant Flour + Water has 83 pasta shapes on
              their menu. This piece highlights 50 of these shapes and does a
              deeper dive into how six of them are made. I took part in the
              design process and built the interface for the gallery and popup
              cards using a combination of React and D3.
            </p>
          </div>
          <div className={pageStyles.rightContainer}>
            <p className={pageStyles.text}>
              Time Frame: 2 weeks
              <div className={pageStyles.spacer} />
              Role: animation, design, front-end development
              <div className={pageStyles.spacer} />
              Tools: React, Adobe Illustrator
            </p>
          </div>
        </div>

        <div className={pageStyles.divider} />

        <div className={pageStyles.projectSection}>
          <video
            className={`${pageStyles.image} ${pageStyles.borderimage}`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dvjavf8xh/video/upload/v1700091174/sros/srosvid_i4w9j0.mp4"
              type="video/mp4"
            />
            Your video player does not support this format.
          </video>
        </div>

        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>
            A ton of messages
          </h3>
          <p className={pageStyles.projectText}>
            We started with a pile of books. In these books were hundreds of
            messages written to those who died from overdoses. We knew we wanted
            to use these messages in some capacity, but weren’t sure how to
            present them in an emotionally impactful way.
          </p>
          <p className={pageStyles.projectText}>
            There were also a couple of problems: <br />
            • sorting through so many messages and picking out the ones to
            people who specifically died from Fentanyl (that’s what this piece
            focuses on) would <b>take time</b>.
            <br /> • simple scans won’t be the best image quality and also
            <b> wouldn’t stand out</b> on a page that’s already mostly white.
          </p>
        </div>

        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>Turning design to code</h3>
          <p className={pageStyles.projectText}>
            Luckily, the writers roughly knew which books contained which
            messages, so we were quickly able to pick out the notes that were
            relevant and the strongest.
          </p>
          <p className={pageStyles.projectText}>
            To capture the emotion that goes into writing these messages, I
            wanted to simulate the motion of writing by hand. After poking
            around the internet, I decided the easiest way was to turn scans of
            the books into SVGs and then animate the strokes.
          </p>
          <p className={pageStyles.projectText}>
            I traced over each scan in Adobe Illustrator using the pen tool,
            exported them as SVGs and then animated them using a React library.
          </p>
          <video
            className={`${pageStyles.image} ${pageStyles.borderimage}`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dvjavf8xh/video/upload/v1700292631/sros/animation1_xtnoly.mp4"
              type="video/mp4"
            />
            Your video player does not support this format.
          </video>
        </div>

        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>Reflection</h3>
          <p className={pageStyles.projectText}>
            • I originally wanted the messages to animate as the user scrolls
            instead of them looping, but couldn’t get it to work in time. A year
            and many projects later, I can say I know how to do it now. :’){' '}
            <br /> • A big part of this project was learning to tone down overly
            flamboyant ideas and think about how to enhance a project’s
            narrative instead of overwhelming it. Not every project needs to
            have an over-the-top, eye-catching design. <br /> • Working and
            becoming more comfortable with manipulating SVG code opens up a lot
            of potential in animation. I’m excited to do more of that in the
            future.
          </p>
        </div>

        <div className={pageStyles.projectSection}>
          <p className={pageStyles.projectText}>
            Read the full story{' '}
            <a
              className={pageStyles.link}
              href="https://www.sfchronicle.com/projects/2022/san-francisco-sros-overdoses//"
              target="_blank"
              rel="noreferrer"
            >
              here.
            </a>
          </p>
        </div>

        <div className={pageStyles.divider} />
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

        <Footer />
      </div>
    </div>
  )
}

export default SROS
export const Head = () => (
  <>
    <title>Work/SROs– Stephanie Zhu</title>{' '}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
)
