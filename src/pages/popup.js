import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

function Popup({ info, card, popup, mode, setMode, setPopup }) {
  // colors
  let light = "#eeeae3";
  let dark = "#1f2a27";
  let neongreen = "#d4df7d";
  let neonpink = "#ff15d8";
  let neonblue = "#0429fe";
  let purple = "#e0bfda";

  function checkMode() {
    if (localStorage.getItem("mode") === "day") {
      setMode("day");
    } else if (localStorage.getItem("mode") === "night") {
      setMode("night");
    }
  }

  useEffect(() => {
    window.addEventListener("storage", checkMode);
    window.dispatchEvent(new Event("storage"));
    return () => {
      window.removeEventListener("storage", checkMode);
    };
  }, [popup]);

  // close popup if clicking outside of it
  const closePopup = (e) => {
    if (card.current && popup && !card.current.contains(e.target)) {
      setPopup(0);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closePopup);
    return () => document.removeEventListener("mousedown", closePopup);
  });

  // control card based on keyboard
  const controlCard = (e) => {
    const { key, keyCode } = e;

    if (key === "Escape" || key === "Esc" || keyCode === 27) {
      setPopup(0);
    }
  };

  // listen for keyboard input
  useEffect(() => {
    document.addEventListener("keydown", controlCard);
    return () => document.removeEventListener("keydown", controlCard);
  });

  // generate star ratings
  function Stars() {
    if (info && info.my_rating === 2) {
      return (
        <div className="rating-wrapper">
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star">
            <FontAwesomeIcon icon={farStar} />
          </span>
          <span className="star">
            <FontAwesomeIcon icon={farStar} />
          </span>
          <span className="star">
            <FontAwesomeIcon icon={farStar} />
          </span>
        </div>
      );
    } else if (info && info.my_rating === 3) {
      return (
        <div className="rating-wrapper">
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star">
            <FontAwesomeIcon icon={farStar} />
          </span>
          <span className="star">
            <FontAwesomeIcon icon={farStar} />
          </span>
        </div>
      );
    } else if (info && info.my_rating === 4) {
      return (
        <div className="rating-wrapper">
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star">
            <FontAwesomeIcon icon={farStar} />
          </span>
        </div>
      );
    } else if (info && info.my_rating === 5) {
      return (
        <div className="rating-wrapper">
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="star-solid">
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      );
    }
  }

  let genres;
  let formats;
  if (info) {
    genres = info.genre.split(",");
    formats = info.format.split(",");
  }

  function GenerateDate() {
    if (info) {
      var startDate = new Date(info.date_started);
      var startDateFinal;

      let endDate;
      let endDateFinal;
      if (info.date_finished) {
        endDate = new Date(info.date_finished);

        endDateFinal =
          ("0" + (endDate.getMonth() + 1)).slice(-2) +
          "." +
          ("0" + endDate.getDate()).slice(-2) +
          "." +
          endDate.getFullYear();
      } else {
        endDate = null;
        endDateFinal = null;
      }

      startDateFinal =
        ("0" + (startDate.getMonth() + 1)).slice(-2) +
        "." +
        ("0" + startDate.getDate()).slice(-2) +
        "." +
        startDate.getFullYear();

      return (
        <p className="popup-date">
          {endDateFinal
            ? `${startDateFinal} – ${endDateFinal}`
            : `${startDateFinal} – `}
        </p>
      );
    } else {
      return;
    }
  }

  return (
    <div
      className="popup-wrapper"
      ref={card}
      style={{
        display: popup ? "block" : "none",
        backgroundColor: mode === "night" ? dark : light,
        border: mode === "night" ? `2px solid ${light}` : `2px solid ${dark}`,
      }}
    >
      <span
        className="xmark"
        onClick={() => {
          setPopup(0);
        }}
      >
        <FontAwesomeIcon
          icon={faXmark}
          style={{
            paddingRight: "2px",
            color: mode === "night" ? light : dark,
          }}
        />
      </span>
      <div className="popup-title-wrapper">
        <GenerateDate />
        <h3
          style={{ color: mode === "night" ? light : dark }}
          className="popup-title"
        >
          {info ? info.title : null}
        </h3>
        <p
          style={{ color: mode === "night" ? neongreen : neonpink }}
          className="popup-author"
        >
          {info ? info.author : null}
        </p>
        {info ? (
          <img className="popup-image" src={info.image} alt="book cover" />
        ) : null}
        <Stars />
        {info ? (
          <div className="popup-tags">
            {formats.map((format) => (
              <div
                className="tags-form"
                style={{
                  backgroundColor: mode === "night" ? neongreen : neonpink,
                  color: mode === "night" ? dark : light,
                }}
              >
                {format}
              </div>
            ))}
            {genres.map((genre) => (
              <div
                className="tags-genre"
                style={{
                  backgroundColor: mode === "night" ? purple : neonblue,
                  color: mode === "night" ? dark : light,
                }}
              >
                {genre}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Popup;
