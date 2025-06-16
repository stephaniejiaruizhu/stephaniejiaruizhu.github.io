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
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1748888531/project%20covers/webp/ZoneZero_fgwz4r.webp"
            type="image/webp"
            className="project-cover"
          />
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1748888539/project%20covers/ZoneZero_m7wslt.jpg"
            type="image/jpeg"
            className="project-cover"
          />
          <img
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1748888539/project%20covers/ZoneZero_m7wslt.jpg"
            alt="project cover showing the topper design for a story on California's Zone Zero regulations"
            className="project-cover"
          />
        </picture>
        <div className="project-text">
          <p className="project-date">06.01.25</p>
          <p className="project-title">
            <a
              href="https://www.sfchronicle.com/projects/2025/california-fire-zone-zero-rules/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjUvY2FsaWZvcm5pYS1maXJlLXpvbmUtemVyby1ydWxlcy8=&time=MTc0ODg4Nzc0MjIyOQ==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=MQ=="
              rel="noreferrer"
              target="_blank"
              className="project-link"
            >
              Zone Zero <span>→</span>
            </a>{" "}
          </p>
          <p className="project-description">
            [illustration, design + development]. A graphical explainer of
            California's Zone Zero regulations designed to improve fire safety
            for homes in high wildfire risk areas. I illustrated, designed and
            coded the entire page.
          </p>
        </div>
      </div>
      <div className="project-wrapper">
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745351525/project%20covers/webp/top100_ry58vz.webp"
            type="image/webp"
            className="project-cover"
          />
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745350485/project%20covers/top100_temsf2.jpg"
            type="image/jpeg"
            className="project-cover"
          />
          <img
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745350485/project%20covers/top100_temsf2.jpg"
            alt="project cover showing the topper design for SF Chronicle's Top 100 Restaurant List"
            className="project-cover"
          />
        </picture>
        <div className="project-text">
          <p className="project-date">03.31.25</p>
          <p className="project-title">
            <a
              href="https://www.sfchronicle.com/projects/2025/top-100-best-restaurants-san-francisco-bay-area/"
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
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745351527/project%20covers/webp/collegeguide_vdsyz6.webp"
            type="image/webp"
            className="project-cover"
          />
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745350486/project%20covers/collegeguide_voenim.png"
            type="image/png"
            className="project-cover"
          />
          <img
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745350486/project%20covers/collegeguide_voenim.png"
            alt="project cover showing the topper design for the California College Admissions Guide Project"
            className="project-cover"
          />
        </picture>
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
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745351526/project%20covers/webp/japantown_l60ppy.webp"
            type="image/webp"
            className="project-cover"
          />
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745350486/project%20covers/japantown_dijzmk.jpg"
            type="image/jpeg"
            className="project-cover"
          />
          <img
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745350486/project%20covers/japantown_dijzmk.jpg"
            alt="project cover showing illustrations for the Japantown project"
            className="project-cover"
          />
        </picture>
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
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745351526/project%20covers/webp/oakes_zfxhuj.webp"
            type="image/webp"
            className="project-cover"
          />
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745350486/project%20covers/oakes_alfffh.jpg"
            type="image/jpeg"
            className="project-cover"
          />
          <img
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745350486/project%20covers/oakes_alfffh.jpg"
            alt="project cover showing the topper design for the Oakes project"
            className="project-cover"
          />
        </picture>
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
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745351528/project%20covers/webp/pasta_w3djto.webp"
            type="image/webp"
            className="project-cover"
          />
          <source
            srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745350486/project%20covers/pasta_d6ocdr.jpg"
            type="image/jpeg"
            className="project-cover"
          />
          <img
            src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1745350486/project%20covers/pasta_d6ocdr.jpg"
            alt="project cover showing the pasta shap gallery from the pasta project"
            className="project-cover"
            style={{ border: "1px solid black" }}
          />
        </picture>
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
          href="https://www.sfchronicle.com/projects/2025/sf-great-highway-traffic-data/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjUvc2YtZ3JlYXQtaGlnaHdheS10cmFmZmljLWRhdGEv&time=MTc1MDEwOTUyNTU3Nw==&rid=MTcwNzU5Y2MtMDczZi00ZWE1LTlmZjEtYjI4NTJhNmJjNWFj&sharecount=MQ=="
          target="_blank"
          rel="noreferrer"
        >
          Great Highway Traffic Changes
        </a>
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
