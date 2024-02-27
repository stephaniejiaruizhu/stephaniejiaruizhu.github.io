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
        <Navbar />
        <Menu />
      </div>
      <div className={menuStyles.rightContainer}>
        <Dropdown />
        <div className={aboutStyles.container}>
          <img
            className={aboutStyles.photo}
            src={
              "https://res.cloudinary.com/dvjavf8xh/image/upload/v1696997775/misc/headshot_sgnfdt.jpg"
            }
            alt="headshot of Stephanie"
          />
          <div className={aboutStyles.aboutText}>
            <span className={aboutStyles.aboutSubhead}>
              Hey there, I'm Stephanie.
            </span>
            <p className={aboutStyles.graf}>
              I’m a digital designer/developer making things at San Francisco
              Chronicle. Before that, I studied journalism, computer science and
              design at Northwestern University. I’ve also designed for The
              Boston Globe and CalMatters.
            </p>
            <p className={aboutStyles.graf}>
              Like every journalist ever, I tell people I love telling stories.
              But more specifically, I want to combine narrative-crafting with
              design and technology to create thoughtful experiences.
            </p>
            <p className={aboutStyles.graf}>
              Currently:
              <div className={aboutStyles.bulletSection}>
                • obsessing over sumo citruses and{" "}
                <span className={aboutStyles.highlight}>this shade</span> of
                green
                <br />• reading <i>The Paper Menagerie and Other Stories</i> by
                Ken Liu
                <br />• trying to avoid the wrath of my pet bird
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
              2nd Place • Online Video, Presentation and Innovation | Portfolio:
              Presentation
            </p>
            <p className={aboutStyles.subGraf}>
              National Press Photographers Association • Best of Photojournalism
              2024
            </p>

            <p className={aboutStyles.graf2}>
              2nd Place • Online Video, Presentation and Innovation | Race and
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
                href="https://docs.google.com/presentation/d/1viQfhsgAFj4AW-KXsWcSRDhNpnZysZbCyZImqKVq5PU/edit?usp=sharing"
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
    <title>About</title>{" "}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
);
