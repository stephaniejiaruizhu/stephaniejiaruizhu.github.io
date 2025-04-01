import React from 'react'
import * as rightStyles from '../styles/modules/right.module.less'
import * as pageStyles from '../styles/modules/workpage.module.less'
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
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1743466348/projectcovers/top100_esfvpo.jpg"
            target="_blank"
            rel="noreferrer"
            alt="top 100 restaurants project cover"
          />
          <p className={rightStyles.projectName}>
            <a
              href="https://www.sfchronicle.com/projects/2025/top-100-best-restaurants-san-francisco-bay-area/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjUvdG9wLTEwMC1iZXN0LXJlc3RhdXJhbnRzLXNhbi1mcmFuY2lzY28tYmF5LWFyZWEv&time=MTc0MzUzMTY1NTkxOA==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=MQ=="
              target="_blank"
              rel='noreferrer'
            >
              {' '}
              Top 100 Restaurants 2025{' '}
              <span className={rightStyles.arrow}>→</span>
            </a>
          </p>
          <p className={rightStyles.projectDescription}>
            (design + development). A ranked list from Chronicle food critics on where to eat in the Bay Area. 
          </p>
        </div>
         <div className={rightStyles.project}>
          <img
            className={rightStyles.cover}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1727819920/projectcovers/collegeguide.png"
            target="_blank"
            rel="noreferrer"
            alt="college guides project cover"
          />
          <p className={rightStyles.projectName}>
            <a
              href="https://www.sfchronicle.com/projects/california-college-admissions/"
              target="_blank"
              rel='noreferrer'
            >
              {' '}
              California College Guide{' '}
              <span className={rightStyles.arrow}>→</span>
            </a>
          </p>
          <p className={rightStyles.projectDescription}>
            (design + development). A data-driven guide to University of California, Cal State and California community college admissions.
          </p>
        </div>
                <div className={rightStyles.project}>
          <img
            className={rightStyles.cover}
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1715621181/japantown/cover_gzj0rx.jpg"
            target="_blank"
            rel="noreferrer"
            alt="japantown incarceration project cover"
          />
          <p className={rightStyles.projectName}>
            <a
              href="https://www.sfchronicle.com/projects/2024/sf-japantown-incarceration/"
              target="_blank"
              rel='noreferrer'
            >
              {' '}
              Japantown incarceration{' '}
              <span className={rightStyles.arrow}>→</span>
            </a>
          </p>
          <p className={rightStyles.projectDescription}>
            (design + development). An analysis and visualization of how Franklin D. Roosevelt's Executive Order 9066 affected San Francisco's Japantown.
          </p>
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
              href="https://www.sfchronicle.com/projects/2023/richard-oakes-killing/"
              target="_blank"
              rel='noreferrer'
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
              href="https://www.sfchronicle.com/projects/2023/sf-trans-clothing/"
              target="_blank"
              rel="noreferrer"
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
              href="https://www.sfchronicle.com/projects/2023/flour-water-pasta/"
              target='_blank'
              rel="noreferrer"
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
              href="https://www.sfchronicle.com/projects/2022/san-francisco-sros-overdoses/"
              target="_blank"
              rel="noreferrer"
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

      <div className={rightStyles.divider} />

      <div className={rightStyles.otherSection}>
        <p className={rightStyles.subTitle}>Other projects:</p>
         <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/2025/california-psychiatric-hospitals-crisis/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjUvY2FsaWZvcm5pYS1wc3ljaGlhdHJpYy1ob3NwaXRhbHMtY3Jpc2lzLw==&time=MTc0MzUzNTE5Njk0NQ==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=Mg=="
          target="_blank"
          rel="noreferrer"
        >
          California Psychiatric Hospital Systems
        </a>
          <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/2024/bay-area-fog-tracker/"
          target="_blank"
          rel="noreferrer"
        >
          Bay Area Fog Tracker
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
          href="https://www.sfchronicle.com/projects/2022/california-wildfire-severity-map/"
          target="_blank"
          rel="noreferrer"
        >
          Fire Burn Severity Map
        </a>
        <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/2023/sf-bay-area-rain-storm/"
          target="_blank"
          rel="noreferrer"
        >
          Bay Area Storm Map
        </a>
        <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/2024/sf-taiwan-food/"
          target="_blank"
          rel="noreferrer"
        >
          Taiwanese Food Guide
        </a>
        <a
          className={rightStyles.otherLink}
          href="https://www.sfchronicle.com/projects/2023/california-voting-law/"
          target="_blank"
          rel="noreferrer"
        >
          California Voting Rights
          
        </a>
      </div>
    </div>
  )
}

export default Right
