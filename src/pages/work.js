import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Work() {
  return (
    <div>
      <div className="kicker-wrapper">
        <p>Selected Projects</p>
        <span>
          <FontAwesomeIcon icon={faArrowDown} />{" "}
        </span>
      </div>
      <div className="project-wrapper">
        <img
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1744675355/projectcovers/Top100.jpg"
          alt="project cover showing the topper design for SF Chronicle's Top 100 Restaurant List"
          className="project-cover"
        />
        <div className="project-text">
          <p className="project-date">03.31.25</p>
          <p className="project-title">
            <a
              href="https://www.sfchronicle.com/projects/2025/top-100-best-restaurants-san-francisco-bay-area/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjUvdG9wLTEwMC1iZXN0LXJlc3RhdXJhbnRzLXNhbi1mcmFuY2lzY28tYmF5LWFyZWEv&time=MTc0NDY3Njc3MzY5OQ==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=MQ=="
              rel="noreferrer"
              target="_blank"
              className="project-link"
            >
              Top 100 Restaurants 2025 <span>→</span>
            </a>{" "}
          </p>
          <p className="project-description">
            [design + development]. A ranked list from Chronicle food critics on
            where to eat in the Bay Area. I designed and built core features of
            the guide, including the topper and map. I also collaborated with
            three other designers to come up with the overall vision for the
            list.
          </p>
        </div>
      </div>
      <div className="project-wrapper">
        <img
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1727819920/projectcovers/collegeguide.png"
          alt="project cover showing the topper design for the California College Admissions Guide Project"
          className="project-cover"
        />
        <div className="project-text">
          <p className="project-date">10.01.2024</p>
          <p className="project-title">
            <a
              href="https://www.sfchronicle.com/projects/california-college-admissions/"
              rel="noreferrer"
              target="_blank"
              className="project-link"
            >
              California College Admissions Guide <span>→</span>
            </a>{" "}
          </p>
          <p className="project-description">
            [branding + design + development]. A data-driven guide to UC, CSU
            and community college admissions with a new subscription model. I
            helped Hearst DevHub’s director of visual storytelling develop the
            overall design and organization of the guide. I then built several
            features on this product including a timeline that automatically
            updates.
          </p>
        </div>
      </div>
      <div className="project-wrapper">
        <img
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1715621181/projectcovers/cover_gzj0rx.jpg"
          alt="project cover showing illustrations for the Japantown project"
          className="project-cover"
        />
        <div className="project-text">
          <p className="project-date">04.03.2024</p>
          <p className="project-title">
            <a
              href="https://www.sfchronicle.com/projects/2024/sf-japantown-incarceration/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjQvc2YtamFwYW50b3duLWluY2FyY2VyYXRpb24v&time=MTc0NDc0Mzg0MjkwMw==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=Mg=="
              rel="noreferrer"
              target="_blank"
              className="project-link"
            >
              Japantown Incarceration <span>→</span>
            </a>{" "}
          </p>
          <p className="project-description">
            [editing + design + development]. An analysis and visualization of
            how Franklin D. Roosevelt's Executive Order 9066 affected San
            Francisco's Japantown. I was the main designer and developer on this
            project where I played a key role in the structuring the topper,
            selecting photos and determining the general design direction.
          </p>
        </div>
      </div>
      <div className="project-wrapper">
        <img
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1696999599/projectcovers/oakes_qkkwhd.jpg"
          alt="project cover showing the topper design for the Oakes project"
          className="project-cover"
        />
        <div className="project-text">
          <p className="project-date">09.19.2023</p>
          <p className="project-title">
            <a
              href="https://www.sfchronicle.com/projects/2023/richard-oakes-killing/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjMvcmljaGFyZC1vYWtlcy1raWxsaW5nLw==&time=MTc0NDc0Mzg3NTA3Mg==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=Mw=="
              rel="noreferrer"
              target="_blank"
              className="project-link"
            >
              The Killing of Richard Oakes <span>→</span>
            </a>{" "}
          </p>
          <p className="project-description">
            [animation + design + development]. A multimedia piece diving into
            the story of Native-American activist Richard Oakes and how the
            justice system failed him. I helped with the overall design of the
            page and pitched the photography treatment. Working with another
            developer, I also animated the illustrations from our graphic artist
            and built the infrastructure for the page.
          </p>
        </div>
      </div>
      <div className="project-wrapper">
        <img
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1696999596/projectcovers/pasta_u0eed8.jpg"
          alt="project cover showing the pasta shap gallery from the pasta project"
          className="project-cover"
          style={{ border: "1px solid black" }}
        />
        <div className="project-text">
          <p className="project-date">04.06.2023</p>
          <p className="project-title">
            <a
              href="https://www.sfchronicle.com/projects/2023/flour-water-pasta/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjMvZmxvdXItd2F0ZXItcGFzdGEv&time=MTc0NDc0Mzk0MjUyMg==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=NA=="
              rel="noreferrer"
              target="_blank"
              className="project-link"
            >
              Pasta Dictionary <span>→</span>
            </a>{" "}
          </p>
          <p className="project-description">
            [design + development]. A browseable encyclopedia of 50 pasta shapes
            and their origins. I pitched and helped organize a design sprint
            with the design, food and visuals teams to conceptualize the format
            of the project. I then synthesized the ideas for the design team and
            built the dictionary component using D3 and React.
          </p>
        </div>
      </div>

      <div className="section-divider-home" />

      <div className="other-wrapper">
        <h4 className="other-title">Other Projects</h4>
        <a
          href="https://www.sfchronicle.com/projects/2025/california-psychiatric-hospitals-crisis/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjUvY2FsaWZvcm5pYS1wc3ljaGlhdHJpYy1ob3NwaXRhbHMtY3Jpc2lzLw==&time=MTc0NDkxMDU5OTc1Nw==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=NQ=="
          target="_blank"
          rel="noreferrer"
        >
          California Psychiatric Hospital Systems
        </a>
        <a
          href="https://www.sfchronicle.com/projects/2024/bay-area-fog-tracker/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjQvYmF5LWFyZWEtZm9nLXRyYWNrZXIv&time=MTc0NDkxMDYzMDgyOQ==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=Ng=="
          target="_blank"
          rel="noreferrer"
        >
          Bay Area Fog Tracker
        </a>
        <a
          href="https://www.sfchronicle.com/projects/guides/lake-tahoe-ski-resorts/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzL2d1aWRlcy9sYWtlLXRhaG9lLXNraS1yZXNvcnRzLw==&time=MTc0NDkxMDg0MTQwNA==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=Nw=="
          target="_blank"
          rel="noreferrer"
        >
          Tahoe Snow Tracker
        </a>
        <a
          href="https://www.sfchronicle.com/projects/2023/california-voting-law/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjMvY2FsaWZvcm5pYS12b3RpbmctbGF3Lw==&time=MTc0NDkxMDg3MDA2Nw==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=OA=="
          target="_blank"
          rel="noreferrer"
        >
          California Voting Rights Act
        </a>
        <a
          href="https://www.sfchronicle.com/projects/2024/sf-taiwan-food/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjQvc2YtdGFpd2FuLWZvb2Qv&time=MTc0NDkxMDk2MjU0MQ==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=OQ=="
          target="_blank"
          rel="noreferrer"
        >
          Taiwanese Food Guide (+ reporting)
        </a>
        <a
          href="https://www.sfchronicle.com/projects/2023/sf-trans-clothing/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjMvc2YtdHJhbnMtY2xvdGhpbmcv&time=MTc0NDkxMDk4NjQ3Mw==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=MTA="
          target="_blank"
          rel="noreferrer"
        >
          Clothing and Gender Euphoria
        </a>
        <a
          href="https://www.sfchronicle.com/projects/2022/san-francisco-sros-overdoses/"
          target="_blank"
          rel="noreferrer"
        >
          Overdose Deaths in SF's Housing Program
        </a>
        <a
          href="https://www.sfchronicle.com/bayarea/article/Fatal-crashes-persisted-on-Bay-Area-roadways-16708064.php"
          target="_blank"
          rel="noreferrer"
        >
          Pandemic Traffic Fatalities (reporting + data)
        </a>
        <p className="other-print">
          I've also done some{" "}
          <a
            href="https://radial-earthquake-1a6.notion.site/Print-and-Illustration-1d8e131c87cb80cc8fc7c596eea9f386"
            target="_blank"
            rel="noreferrer"
            className="other-print-link"
          >
            print and illustration work →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Work;
