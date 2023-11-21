import React from 'react'
import * as menuStyles from '../styles/modules/menu.module.less'
import * as pageStyles from '../styles/modules/workpage.module.less'
import Navbar from './navbar'
import MenuProjects from './menuProjects'
import Footer from './footer'
import Dropdown from './dropdown'

function Pasta() {
  return (
    <div className={menuStyles.container}>
      <div className={menuStyles.leftContainer}>
        <Navbar />
        <MenuProjects active="pasta"/>
      </div>
      <div className={menuStyles.rightContainer}>
        <Dropdown />
        <h2 className={pageStyles.title}>Pasta Dictionary</h2>

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
              Time Frame: 2 months
              <div className={pageStyles.spacer} />
              Role: design, front-end development
              <div className={pageStyles.spacer} />
              Tools: React, Gatsby, D3.js
            </p>
          </div>
        </div>

        <div className={pageStyles.divider} />

        <div className={pageStyles.projectSection}>
          <video className={`${pageStyles.image} ${pageStyles.borderimage}`} autoPlay loop muted playsInline>
            <source
              src="https://res.cloudinary.com/dvjavf8xh/video/upload/v1699857963/pasta/pastavid_egazkm.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>Changing the process up</h3>
          <p className={pageStyles.projectText}>
            News tends to move quickly, so my team doesn’t usually have the time
            to go through a full design process– meaning we miss out a lot when
            it comes to gathering ideas and feedback. Luckily, this project had
            a looser deadline, so I pitched the idea of a design sprint (our
            first ever one!) to my manager.
          </p>
          <p className={pageStyles.projectText}>
            Three other designers and I made wireframes to present how we
            thought the story could look. We then gathered the food and visuals
            teams for a critique session where we used post-it notes to comment
            on each wireframe.
          </p>
          <img
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1699852750/pasta/pasta_ujxw5o.jpg"
            alt="paper wireframes of project taped onto a wall"
            className={pageStyles.image}
          />
        </div>

        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>Consolidating ideas</h3>
          <p className={pageStyles.projectText}>
            Through the critique session, we decided a <b>clickable grid</b> of
            pasta photos, a <b>“surprise me” button</b> that selects a random
            pasta shape and
            <b> custom illustrations</b> were the top features we wanted to
            include in the final design. I then combined these ideas into some
            sketches the developers could follow when building the project page.
          </p>
          <div className={pageStyles.imagecontainer}>
            <img
              src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1699852749/pasta/pasta3_feh5km.jpg"
              alt="sketches summarizing ideas from the critique session"
              className={pageStyles.imageflex}
            />
            <img
              src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1699852749/pasta/pasta2_emp9bu.jpg"
              alt="sketches summarizing ideas from the critique session"
              className={pageStyles.imageflex}
            />
          </div>
          <img
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1699852748/pasta/pasta4_cnjamr.jpg"
            alt="sketches summarizing ideas from the critique session"
            className={pageStyles.halfimage}
          />
        </div>

        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>Turning design to code</h3>
          <p className={pageStyles.projectText}>
            Although this project is developmentally-heavy, turning the design
            into code was straightforward for the most part. I was in charge of
            building the main part of the project– the pasta photo grid and the
            clickable cards. Luckily, most of it involved functions similar to
            ones I had written for previous projects and a lot of the challenge
            was just making sure there were no bugs or memory leaks.
          </p>
          <p className={pageStyles.projectText}>
            Because this project involves a lot of clicking and a ton of
            information, we added keyboard accessibility and navigation buttons
            to help with the browsing experience. I also decided to be a little
            ambitious and learned how to make interactive maps in D3.js to show
            which regions of Italy each pasta shape comes from.
          </p>
        </div>

        <div className={pageStyles.projectSection}>
          <h3 className={pageStyles.subTitle}>Reflection</h3>
          <p className={pageStyles.projectText}>
            • This was my first time using D3 and I didn’t realize how tricky it
            could be to use it in conjunction with React which also handles the
            DOM! <br /> • This was also my first time helping manage an intern
            on a project and it was a good learning experience into delegating
            tasks and making sure everyone is on the same page. <br /> •
            Bouncing off ideas off of each other leads to some cool things!
            There’s a lot of features I never would’ve thought of by myself and
            it’s helpful to get confirmation a design makes sense from a user
            experience standpoint.
          </p>
        </div>

        <div className={pageStyles.projectSection}>
          <p className={pageStyles.projectText}>
            Read the full story{' '}
            <a
              className={pageStyles.link}
              href="https://www.sfchronicle.com/projects/2023/flour-water-pasta/"
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

export default Pasta
export const Head = () => (
  <>
    <title>Work/Pasta– Stephanie Zhu</title>{' '}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
)
