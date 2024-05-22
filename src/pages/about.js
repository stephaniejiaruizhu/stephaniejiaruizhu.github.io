import React from "react";
import * as menuStyles from "../styles/modules/menu.module.less";
import * as aboutStyles from "../styles/modules/about.module.less";
import Navbar from "./navbar";
import Menu from "./menu";
import Footer from "./footer";
import Dropdown from "./dropdown";

function About() {
  return (
    <div className={menuStyles.container}>
      <div className={menuStyles.leftContainer}>
        <Navbar active="about" />
        <Menu />
      </div>
      <div className={menuStyles.rightContainer}>
        <Dropdown />
        <div className={aboutStyles.container}>
          <img
            className={aboutStyles.photo}
            src={
              "https://res.cloudinary.com/dvjavf8xh/image/upload/v1700551847/misc/headshot_yxdnsw.png"
            }
            alt="headshot of Stephanie"
          />
          <div className={aboutStyles.aboutText}>
            <span className={aboutStyles.aboutSubhead}>
              Hey there, I'm Stephanie.
            </span>
            <p className={aboutStyles.graf}>
              I’m a digital designer/developer making{" "}
              <a
                className={aboutStyles.link}
                href="https://www.sfchronicle.com/author/stephanie-zhu/"
                target="_blank"
                rel="noreferrer"
              >
                things
              </a>{" "}
              at San Francisco Chronicle. Before that, I studied journalism,
              computer science and design at Northwestern University. I’ve also
              designed for The Boston Globe and CalMatters.
            </p>
            <p className={aboutStyles.graf}>
              Like every journalist ever, I tell people I love telling stories.
              But more specifically, I want to combine storytelling with
              design and technology to create thoughtful interactive experiences.
            </p>
            <p className={aboutStyles.graf}>
              Currently:
              <div className={aboutStyles.bulletSection}>
                • obsessing over{" "}
                <a
                  className={aboutStyles.link}
                  href="https://sumocitrus.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  sumo citruses
                </a>{" "}
                and <span className={aboutStyles.highlight}>this shade</span> of
                green
                <br />• reading {" "} 
                <a
                className={aboutStyles.link}
                href="https://www.goodreads.com/book/show/31684925-chemistry"
                target="_blank"
                rel="noreferrer"
                ><i>{" "}Chemistry</i></a> by Weike Wang
                <br />• playing through {" "}
                <i> Stardew Valley</i>
                {" "}<a 
                className={aboutStyles.link}
                href="https://drive.google.com/file/d/1QuP5hdK6nCdS9Wp3AQetJ6lo5VUJGUyg/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                >once again</a>
                <br />• trying to avoid the wrath of my{" "}
                <a
                  className={aboutStyles.link}
                  href="https://drive.google.com/file/d/1Hz77t3LvaCYS1mAWo_BP4tAe2HhB8W3L/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  pet bird
                </a>
                <br/>
                •{" "}
                <a
                className={aboutStyles.link}
                href="https://www.yelp.com/user_details?userid=wDQlvv8Ww65JdKZ9591Lrw&utm_source=ishare"
                target="_blank"
                rel="noreferrer">
                  Eating
                </a> 
                {" "} my way through the Bay Area
              </div>
            </p>
            <p className={aboutStyles.graf}>
              Let's{" "}
              <a
                className={aboutStyles.link}
                href="mailto:stephaniejiaruizhu@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                chat!
              </a>{" "}
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
              Society for News Design • Creative Competition 2023
            </p>

            <p className={aboutStyles.graf2}>
              2nd Place • Portfolio:
              Presentation
            </p>
            <p className={aboutStyles.subGraf}>
              National Press Photographers Association • Best of Photojournalism
              2024
            </p>

            <p className={aboutStyles.graf2}>
              2nd Place • Race and
              Identity in America: Online Visual Presentation
            </p>
            <p className={aboutStyles.subGraf}>
              National Press Photographers Association • Best of Photojournalism
              2024
            </p>

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
              3rd Place • Portfolio:
              Presentation
            </p>
            <p className={aboutStyles.subGraf}>
              National Press Photographers Association • Best of Photojournalism
              2023
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
  );
}

export default About;

export const Head = () => (
  <>
    <title>About– Stephanie Zhu</title>{" "}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
);
