import React from 'react'
import * as menuStyles from '../styles/modules/menu.module.less'
import * as aboutStyles from '../styles/modules/about.module.less'
import Navbar from './navbar'
import Menu from './menu'
import Footer from './footer'
import Dropdown from './dropdown'

function About() {
  return (
    <div className={menuStyles.container}>
      <div className={menuStyles.leftContainer}>
        <Navbar active="about"/>
        <Menu />
      </div>
      <div className={menuStyles.rightContainer}>
        <Dropdown />
        <div className={aboutStyles.container}>
          <img
            className={aboutStyles.photo}
            src={
              'https://res.cloudinary.com/dvjavf8xh/image/upload/v1700551847/misc/headshot_yxdnsw.png'
            }
            alt="headshot of Stephanie"
          />
          <div className={aboutStyles.aboutText}>
            <span className={aboutStyles.aboutSubhead}>
              Hey there, I'm Stephanie.
            </span>
            <p className={aboutStyles.graf}>
              I’m a digital designer/developer making{' '}
              <a
                className={aboutStyles.link}
                href="https://www.sfchronicle.com/author/stephanie-zhu/"
                target="_blank"
                rel="noreferrer"
              >
                things
              </a>{' '}
              at San Francisco Chronicle. Before that, I studied journalism,
              computer science and design at Northwestern University. I’ve also
              designed for The Boston Globe and CalMatters.
            </p>
            <p className={aboutStyles.graf}>
              Like every journalist ever, I tell people I love telling stories.
              But more specifically, I want to combine narrative-crafting with
              design and technology to create thoughtful experiences.
            </p>
            <p className={aboutStyles.graf}>
              Currently:
              <div className={aboutStyles.bulletSection}>
                • obsessing over{' '}
                <a
                  className={aboutStyles.link}
                  href="https://sumocitrus.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  sumo citruses
                </a>{' '}
                and <span className={aboutStyles.highlight}>this shade</span> of
                green
                <br />• reading <i>The Razor's Edge</i> by W. Somerset Maugham
                <br />• trying to avoid the wrath of my{' '}
                <a
                  className={aboutStyles.link}
                  href="https://drive.google.com/file/d/1Hz77t3LvaCYS1mAWo_BP4tAe2HhB8W3L/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  pet bird
                </a>
              </div>
            </p>
            <p className={aboutStyles.graf}>
              Let's{' '}
              <a
                className={aboutStyles.link}
                href="mailto:stephaniejiaruizhu@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                chat!
              </a>{' '}
              :-)
            </p>
          </div>

          <div className={aboutStyles.divider} />

          <div className={aboutStyles.aboutText}>
            <span className={aboutStyles.aboutSubhead}>Recognition</span>
            <p className={aboutStyles.graf2}>
              Award of Excellence • Design: Regional/Local
            </p>
            <p className={aboutStyles.subGraf}>
              Society for News Design • Creative Competition 2022
            </p>

            <p className={aboutStyles.graf2}>
              Award of Excellence • Infographics: Environment
            </p>
            <p className={aboutStyles.subGraf}>
              Society for News Design • Creative Competition 2022
            </p>

            <p className={aboutStyles.graf2}>
              Award of Excellence • Elements: Data Visualization
            </p>
            <p className={aboutStyles.subGraf}>
              Society for News Design • Creative Competition 2022
            </p>

            <p className={aboutStyles.graf2}>Lead Developer/Designer</p>
            <p className={aboutStyles.subGraf}>
              Was lead developer and designer for a 2022 Pulitzer finalist piece
            </p>

            <p className={aboutStyles.graf2}>
              Finalist • Al Neuharth Innovation in Investigative Journalism
            </p>
            <p className={aboutStyles.subGraf}>
              Online News Association • Online Journalism Awards 2022
            </p>
          </div>

          <div className={aboutStyles.aboutText}>
            <span className={aboutStyles.aboutSubhead}>Speaking</span>
            <p className={aboutStyles.graf2}>
              <a
                href="https://docs.google.com/document/d/1rR8gSye8QcOMYWtd65rCWEzRvPx6b7-L7vKD5slBXH0/edit?usp=sharing"
                className={aboutStyles.link}
                target="_blank"
                rel="noreferrer"
              >
                Too much change, too fast. How can we avoid innovation burnout
                in newsrooms?
              </a>
            </p>
            <p className={aboutStyles.subGraf}>October 2023, SRCCON</p>

            <p className={aboutStyles.graf2}>
              <a
                href="https://docs.google.com/presentation/d/1Q0kJheJ6pjtvJOdBeuTUgu9h2iLSCWPMqU-b47vgBgc/edit?usp=sharing"
                className={aboutStyles.link}
                target="_blank"
                rel="noreferrer"
              >
                How to tell a story with more than just words
              </a>
            </p>
            <p className={aboutStyles.subGraf}>
              July 2023, AAJA National Convention
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default About

export const Head = () => (
  <>
    <title>About– Stephanie Zhu</title>{' '}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
)
