import React, { useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/styles.less";

function About() {
  return (
    <div>
      <Navbar active="About" />
      <div className="about-wrapper">
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745446883/headshot_julerc.webp"
            type="image/webp"
            className="about-image"
          />
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745442388/headshot_lvhm3r.png"
            type="image/png"
            className="about-image"
          />
          <img
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745442388/headshot_lvhm3r.png"
            className="about-image"
            alt="headshot of Stephanie Zhu"
          />
        </picture>
        <div className="about-text-wrapper">
          <h3 className="about-intro-text">Hey there, I’m Stephanie.</h3>
          <p className="about-intro-subtext">
            {" "}
            I'm a designer and developer at San Francisco Chronicle where I work
            on digital news products and interactive stories. Before that, I
            studied journalism, computer science and design at Northwestern
            University. I’ve also designed for The Boston Globe and CalMatters.{" "}
            <br />
            <br /> Like every person with a journalism background ever, I tell
            people I love telling stories. But more specifically, I want to
            combine research and analysis skills from journalism with technology
            to create experiences that are thoughtful and speak to users.
            <br />
            <br /> What this looks like is different day-to-day and can be
            confusing to explain, but at the core of it all, I just want to make
            cool things.
          </p>
          <p className="about-intro-subtext" style={{ marginTop: "30px" }}>
            Currently:
            <br />• obsessing over{" "}
            <a
              href="https://www.formula1.com/"
              target="_blank"
              rel="noreferrer"
            >
              Formula 1
            </a>{" "}
            and{" "}
            <span style={{ color: "#8f00ff", fontWeight: "800" }}>
              bright colors
            </span>
            <br />• playing through Stardew Valley{" "}
            <a
              href="https://drive.google.com/file/d/1QuP5hdK6nCdS9Wp3AQetJ6lo5VUJGUyg/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              once again
            </a>
            <br />• reading{" "}
            <a
              href="https://www.goodreads.com/book/show/208584952-rental-house"
              target="_blank"
              rel="noreferrer"
            >
              <i>Rental House</i>
            </a>{" "}
            by Weike Wang and{" "}
            <a
              href="https://www.goodreads.com/book/show/1111.The_Power_Broker"
              target="_blank"
              rel="noreferrer"
            >
              <i>The Power Broker</i>
            </a>{" "}
            by Robert Caro
            <br />• perfecting my{" "}
            <a
              href="https://drive.google.com/file/d/1TXCx38r2byLDnUOfYOvH2GB2ZkfiInd-/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              dumpling folds
            </a>{" "}
            [so my mom doesn’t laugh at me]
            <br />•{" "}
            <a
              href="https://www.yelp.com/user_details?userid=wDQlvv8Ww65JdKZ9591Lrw"
              target="_blank"
              rel="noreferrer"
            >
              eating
            </a>{" "}
            my way through the Bay Area
          </p>
          <p className="about-intro-subtext" style={{ marginTop: "30px" }}>
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
          <div className="section-divider" />

          <div className="about-section">
            <h3 className="about-intro-subtitle">Kudos [selected]</h3>
            <div className="award">
              <p className="award-title">Bronze Medal (x2)</p>
              <p className="award-giver">
                Society for News Design • Best of News Design 46
              </p>
            </div>
            <div className="award">
              <p className="award-title">Award of Excellence (x4)</p>
              <p className="award-giver">
                Society for News Design • Best of News Design 46
              </p>
            </div>
            <div className="award">
              <p className="award-title">First Place • Online Presentation</p>
              <p className="award-giver">
                Best of the West • Newspaper, Magazine and Online Contest 2025
              </p>
            </div>
            <div className="award">
              <p className="award-title">
                Winner • Excellence in Visual Digital Storytelling
              </p>
              <p className="award-giver">
                Online News Association • Online Journalism Awards 2024
              </p>
            </div>
            <div className="award">
              <p className="award-title">
                Winner • Topical Reporting: Race, Ethnicity, Gender and Identity
              </p>
              <p className="award-giver">
                Online News Association • Online Journalism Awards 2024
              </p>
            </div>
            <div className="award">
              <p className="award-title">Award of Excellence (x2)</p>
              <p className="award-giver">
                Society for News Design • Best of News Design 45
              </p>
            </div>
            <div className="award">
              <p className="award-title">Award of Excellence (x3)</p>
              <p className="award-giver">
                Society for News Design • Best of News Design 44
              </p>
            </div>
            <div className="award">
              <p className="award-title">Lead Developer/Designer</p>
              <p className="award-giver">
                Was lead developer and designer for a 2022 Pulitzer finalist
                piece
              </p>
            </div>
          </div>

          <div className="about-section">
            <h3 className="about-intro-subtitle">Talks</h3>
            <div className="award">
              <p className="award-title">
                <a
                  href="https://docs.google.com/presentation/d/1viQfhsgAFj4AW-KXsWcSRDhNpnZysZbCyZImqKVq5PU/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Too much change, too fast. How can we avoid innovation burnout
                  in newsrooms?
                </a>
              </p>
              <p className="award-giver">SRCCON • October 2023</p>
            </div>
            <div className="award">
              <p className="award-title">
                <a
                  href="https://docs.google.com/presentation/d/1Q0kJheJ6pjtvJOdBeuTUgu9h2iLSCWPMqU-b47vgBgc/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  How to tell a story with more than just words
                </a>
              </p>
              <p className="award-giver">
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
