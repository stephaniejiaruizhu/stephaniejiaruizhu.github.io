import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import * as aboutStyles from "../styles/modules/about.module.less";

function About() {
  return (
    <div>
      <Navbar active="About" />
      <div className={aboutStyles.aboutWrapper}>
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1767998029/misc/Headshots/headshot2_lighter_green_qurzmi.webp"
            type="image/webp"
            className={aboutStyles.aboutImage}
          />
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1767998029/misc/Headshots/headshot2_lighter_green_ayuxsf.png"
            type="image/png"
            className={aboutStyles.aboutImage}
          />
          <img
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1767998029/misc/Headshots/headshot2_lighter_green_ayuxsf.png"
            className={aboutStyles.aboutImage}
            alt="headshot of Stephanie Zhu"
          />
        </picture>
        <div className={aboutStyles.aboutTextWrapper}>
          <h3 className={aboutStyles.aboutIntroText}>
            Hey there, I’m Stephanie.
          </h3>
          <p className={aboutStyles.aboutIntroSubtext}>
            {" "}
            I was most recently a designer and developer at San Francisco
            Chronicle where I worked on digital news products and interactive
            stories. Before that, I studied journalism, computer science and
            design at Northwestern University. I’ve also designed for The Boston
            Globe and CalMatters. <br />
            <br /> Like every person with a journalism background ever, I tell
            people I love telling stories. But more specifically, I want to
            combine research and analysis skills from journalism with technology
            to create experiences that are thoughtful and delightful.
            <br />
            <br /> What this looks like is different day-to-day and can be
            confusing to explain, but at the core of it all, I just want to make
            cool things.
          </p>
          <p
            className={aboutStyles.aboutIntroSubtext}
            style={{ marginTop: "30px" }}
          >
            Currently:
            <br />• obsessing over{" "}
            <a
              href="https://alisonfriend.com/"
              target="_blank"
              rel="noreferrer"
            >
              whimsical{" "}
            </a>
            <a
              href="https://www.wendymacnaughton.com/"
              target="_blank"
              rel="noreferrer"
            >
              art
            </a>
            , {""}
            <a
              href="https://magicpuzzlecompany.com/"
              target="_blank"
              rel="noreferrer"
            >
              jigsaw puzzles
            </a>{" "}
            and <span className={aboutStyles.aboutSpan}>bright colors</span>
            <br /> • making questionable choices in{" "}
            <a
              href="https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/"
              target="_blank"
              rel="noreferrer"
            >
              Disco Elysium
            </a>{" "}
            <br />• reading{" "}
            <a
              href="https://www.goodreads.com/book/show/40121985-how-to-hide-an-empire"
              target="_blank"
              rel="noreferrer"
            >
              <i>How to Hide an Empire</i>
            </a>{" "}
            by Daniel Immerwahr <br />• documenting my eats through{" "}
            <a
              href="https://drive.google.com/file/d/1QfBozZCgxgp-8jjjkkoL8kAqaTkToT0X/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              doodles
            </a>
          </p>
          <p
            className={aboutStyles.aboutIntroSubtext}
            style={{ marginTop: "30px" }}
          >
            See something interesting?{" "}
            <a
              href="mailto:stephaniejiaruizhu@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Let’s chat!
            </a>{" "}
            :-)
          </p>
          <div className={aboutStyles.sectionDivider} />

          <div className={aboutStyles.aboutSection}>
            <h3 className={aboutStyles.aboutIntroSubtitle}>Kudos [selected]</h3>
            <div className={aboutStyles.award}>
              <p className={aboutStyles.awardTitle}>
                Honorable Mention • Excellence in Online/Digital Journalism,
                Immersive Storytelling
              </p>
              <p className={aboutStyles.awardGiver}>
                Asian American Journalists Association • 2025 Journalism
                Excellence Awards
              </p>
            </div>
            <div className={aboutStyles.award}>
              <p className={aboutStyles.awardTitle}>Bronze Medal (x2)</p>
              <p className={aboutStyles.awardGiver}>
                Society for News Design • Best of News Design 46
              </p>
            </div>
            <div className={aboutStyles.award}>
              <p className={aboutStyles.awardTitle}>Award of Excellence (x4)</p>
              <p className={aboutStyles.awardGiver}>
                Society for News Design • Best of News Design 46
              </p>
            </div>
            <div className={aboutStyles.award}>
              <p className={aboutStyles.awardTitle}>
                First Place • Online Presentation
              </p>
              <p className={aboutStyles.awardGiver}>
                Best of the West • Newspaper, Magazine and Online Contest 2025
              </p>
            </div>
            <div className={aboutStyles.award}>
              <p className={aboutStyles.awardTitle}>
                Winner • Excellence in Visual Digital Storytelling
              </p>
              <p className={aboutStyles.awardGiver}>
                Online News Association • Online Journalism Awards 2024
              </p>
            </div>
            <div className={aboutStyles.award}>
              <p className={aboutStyles.awardTitle}>
                Winner • Topical Reporting: Race, Ethnicity, Gender and Identity
              </p>
              <p className={aboutStyles.awardGiver}>
                Online News Association • Online Journalism Awards 2024
              </p>
            </div>
            <div className={aboutStyles.award}>
              <p className={aboutStyles.awardTitle}>Award of Excellence (x2)</p>
              <p className={aboutStyles.awardGiver}>
                Society for News Design • Best of News Design 45
              </p>
            </div>
            <div className={aboutStyles.award}>
              <p className={aboutStyles.awardTitle}>Award of Excellence (x3)</p>
              <p className={aboutStyles.awardGiver}>
                Society for News Design • Best of News Design 44
              </p>
            </div>
            <div className={aboutStyles.award}>
              <p className={aboutStyles.awardTitle}>Lead Developer/Designer</p>
              <p className={aboutStyles.awardGiver}>
                Was lead developer and designer for a 2022 Pulitzer finalist
                piece
              </p>
            </div>
          </div>

          <div className={aboutStyles.aboutSection}>
            <h3 className={aboutStyles.aboutIntroSubtitle}>Talks</h3>
            <div className={aboutStyles.award}>
              <p className={aboutStyles.awardTitle}>
                <a
                  href="https://docs.google.com/presentation/d/1viQfhsgAFj4AW-KXsWcSRDhNpnZysZbCyZImqKVq5PU/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Too much change, too fast. How can we avoid innovation burnout
                  in newsrooms?
                </a>
              </p>
              <p className={aboutStyles.awardGiver}>SRCCON • October 2023</p>
            </div>
            <div className={aboutStyles.award}>
              <p className={aboutStyles.awardTitle}>
                <a
                  href="https://docs.google.com/presentation/d/1Q0kJheJ6pjtvJOdBeuTUgu9h2iLSCWPMqU-b47vgBgc/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  How to tell a story with more than just words
                </a>
              </p>
              <p className={aboutStyles.awardGiver}>
                AAJA National Convention • July 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

export const Head = () => (
  <>
    <title>Stephanie Zhu– About</title>{" "}
    <link
      rel="icon"
      href="https://res.cloudinary.com/dvjavf8xh/image/upload/v1669230944/misc/favicon_yvyqci.ico"
    ></link>
  </>
);
