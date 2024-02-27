import React from 'react'
import * as rightStyles from '../styles/modules/right.module.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Right() {
  return (
    <div className={rightStyles.wrapper}>
      <h1 className={rightStyles.intro}>
        Hey there! I'm Stephanie– sometimes journalist, sometimes designer,
        sometimes developer.
      </h1>
      <h2 className={rightStyles.subintro}>
        Always a storyteller. Currently making things at{' '}
        <a
          href="https://www.sfchronicle.com/author/stephanie-zhu/"
          target="_blank"
          rel="noreferrer"
        >
          San Francisco Chronicle.
        </a>
      </h2>

      <div className={rightStyles.menu}>
          <a className={`${rightStyles.menuButton} ${rightStyles.active}`} href="./">Digital</a>
          <a className={`${rightStyles.menuButton}`} href="/print">Print</a>
          <a className={`${rightStyles.menuButton}`} href="/other">Other</a>
      </div>

      <div className={rightStyles.projectSection}>
        <div className={rightStyles.transition}>
          <p> selected projects </p>
          <FontAwesomeIcon className={rightStyles.arrow} icon={faArrowDown} />
        </div>
        <div className={rightStyles.project}>
          <img
            className={rightStyles.cover}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1696999599/projectcovers/oakes_qkkwhd.jpg"
            target="_blank"
            rel="noreferrer"
            alt="richard oakes project cover"
          />
          <p className={rightStyles.projectName}>
            <a
              href="/oakes"
            >
              {' '}
              The Killing of Richard Oakes{' '}
              <span className={rightStyles.arrow}>→</span>
            </a>
          </p>
          <p className={rightStyles.projectDescription}>
            (animation, design + development). A multimedia piece diving into
            the story of Native-American activist Richard Oakes and how the
            justice system failed him and his family.
          </p>
        </div>
        <div className={rightStyles.project}>
          <img
            className={rightStyles.cover}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1697003961/projectcovers/transgenderclothing_qrqb9a.jpg"
            target="_blank"
            rel="noreferrer"
            alt="transgender clothing project cover"
          />
          <p className={rightStyles.projectName}>
            <a
              href="/clothing"
            >
              {' '}
              Clothing and Gender Euphoria{' '}
              <span className={rightStyles.arrow}>→</span>
            </a>
          </p>
          <p className={rightStyles.projectDescription}>
            (design + development). 8 transgender people tell their stories on
            clothing and identity.
          </p>
        </div>
        <div className={rightStyles.project}>
          <img
            className={rightStyles.cover}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1696999596/projectcovers/pasta_u0eed8.jpg"
            target="_blank"
            rel="noreferrer"
            alt="pasta dictionary project cover"
          />
          <p className={rightStyles.projectName}>
            <a
              href="/pasta"
            >
              {' '}
              Pasta Dictionary <span className={rightStyles.arrow}>→</span>
            </a>
          </p>
          <p className={rightStyles.projectDescription}>
            (design + development). A browseable encyclopedia of 50 pasta shapes
            and their origins.
          </p>
        </div>
        <div className={rightStyles.project}>
          <img
            className={rightStyles.cover}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1696999603/projectcovers/sros_l6tgzt.jpg"
            target="_blank"
            rel="noreferrer"
            alt="overdose deaths project cover"
          />
          <p className={rightStyles.projectName}>
            <a
              href="/sros"
            >
              {' '}
              Overdose Deaths in SF’s Housing Program{' '}
              <span className={rightStyles.arrow}>→</span>
            </a>
          </p>
          <p className={rightStyles.projectDescription}>
            (animation, design + development). A look into the lives lost to
            SF's overdose crisis– part of a larger Pulitzer finalist
            investigative series on permanent supportive housing.
          </p>
        </div>
      </div>

      <div className={rightStyles.divider} />

      <div className={rightStyles.otherSection}>
        <p className={rightStyles.subTitle}>Other projects:</p>
        <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/2023/california-voting-law/"
          target="_blank"
          rel="noreferrer"
        >
          California Voting Rights
        </a>
        <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/guides/lake-tahoe-ski-resorts/"
          target="_blank"
          rel="noreferrer"
        >
          Tahoe Snow Tracker
        </a>
        <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/2023/california-stunt-cheerleading/"
          target="_blank"
          rel="noreferrer"
        >
          Stunt Cheerleading
        </a>
        <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/2022/bay-area-housing-power-players/"
          target="_blank"
          rel="noreferrer"
        >
          Who Owns All the Housing in the Bay Area?
        </a>
        <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/2022/california-wildfire-severity-map/"
          target="_blank"
          rel="noreferrer"
        >
          Fire Burn Severity
        </a>
        <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/2023/sf-bay-area-rain-storm/"
          target="_blank"
          rel="noreferrer"
        >
          Bay Area Storm Map
        </a>
      </div>
    </div>
  )
}

export default Right
