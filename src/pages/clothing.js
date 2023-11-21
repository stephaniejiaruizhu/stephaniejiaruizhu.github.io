import React from 'react'
import * as menuStyles from '../styles/modules/menu.module.less'
import * as pageStyles from '../styles/modules/workpage.module.less'
import Navbar from './navbar'
import MenuProjects from './menuProjects'
import Footer from './footer'
import Dropdown from './dropdown'

function Clothing() {
  return (
    <div className={menuStyles.container}>
      <div className={menuStyles.leftContainer}>
        <Navbar />
        <MenuProjects active="clothing"/>
      </div>
      <div className={menuStyles.rightContainer}>
        <Dropdown />
        <h2 className={pageStyles.title}>Clothing and Gender Euphoria</h2>

        <div className={pageStyles.infoContainer}>
          <div className={pageStyles.leftContainer}>
            <p className={pageStyles.text}>
              I collaborated with the reporter, photo team and audio team to
              conceptualize this multimedia piece on the role fashion plays in
              the transgender community.
            </p>
          </div>
          <div className={pageStyles.rightContainer}>
            <p className={pageStyles.text}>
              Time Frame: 1.5 weeks
              <div className={pageStyles.spacer} />
              Role: Design, front-end development
              <div className={pageStyles.spacer} />
              Tools: React, Figma
            </p>
          </div>
        </div>

        <div className={pageStyles.divider} />
        
        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>Conceptualizing a format</h3>
          <p className={pageStyles.projectText}>
            We started off not having a clear idea of how to tell this story–
            the reporter had a collection of interviews, photos and audio, but
            wanted to hear my thoughts on how to best present all these
            elements.
          </p>
          <p className={pageStyles.projectText}>
            I went through the transcripts of each interview and from there, I
            came up with a couple of quick ideas which I mocked up in Figma.
            Because of the tight turnaround for this project, I jumped straight
            to higher fidelity mockups to give the other teams a better
            understanding of what I was envisioning.
          </p>
          <img
            className={pageStyles.image}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1700176759/transgender/transgenderclothing_bhbcry.png"
            alt="high-fidelity mockups of the clothing project"
          />
        </div>

        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>The importance of identity</h3>
          <p className={pageStyles.projectText}>
            As I listened to the interview transcripts, what stood out to me was
            the individuality of each interviewee. Although the general idea was
            clothing helped these people feel more confident, each person had
            their own style and voice. I wanted to highlight this individuality
            by giving each person a section featuring their stories. I then
            worked with the reporter to format the interviews into a q&a style
            and paired them with the respective audio.
          </p>
          <p className={pageStyles.projectText}>
            I was also inspired by trading cards and how there’s often
            statistics about the person or character being featured, so I coded
            an interactive version that flips over and shows more information
            when clicked.
          </p>
          <video className={pageStyles.image} autoPlay loop muted playsInline>
            <source
              src="https://res.cloudinary.com/dvjavf8xh/video/upload/v1700091171/transgender/transgendervid_farzqw.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>Reflection</h3>
          <p className={pageStyles.projectText}>
            • Taking ownership of the project workflow from start to finish,
            working with multiple teams and presenting my ideas (without manager
            supervision) really got me thinking about how my team traditionally
            manages projects and how we can get better at it. <br />• As a
            designer and developer, I sometimes feel disconnected from the story
            because I’m often not the one doing the reporting and interviews.
            However, working on this project made me realize I’m still actively
            shaping content so I should give myself more credit! <br /> • The
            default HTML audio player has really limited styling options so
            sometimes you just have to make your own audio player. >:(
          </p>
        </div>

        <div className={pageStyles.projectSection}>
          <p className={pageStyles.projectText}>
            Read the full story{' '}
            <a
              className={pageStyles.link}
              href="https://www.sfchronicle.com/projects/2023/sf-trans-clothing/"
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

export default Clothing
export const Head = () => (
  <>
    <title>Work/Clothing– Stephanie Zhu</title>{' '}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
)
