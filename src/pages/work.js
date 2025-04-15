import React from "react";

function Work() {
  return (
    <div>
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
            >
              Top 100 Restaurants 2025
            </a>{" "}
            <span>→</span>
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
    </div>
  );
}

export default Work;
