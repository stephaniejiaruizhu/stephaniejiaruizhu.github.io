import React, { useEffect } from "react";
import StarDarkSolid from "../images/icons/star-dark-solid.webp";
import StarDarkOutline from "../images/icons/star-outline-dark.webp";
import StarLightSolid from "../images/icons/star-light-solid.webp";
import StarLightOutline from "../images/icons/star-outline-light.webp";
import XDark from "../images/icons/xmarkdark.webp";
import XLight from "../images/icons/xmarklight.webp";

function Popup({ info, card, popup, mode, setPopup }) {
  // colors
  let light = "#eeeae3";
  let dark = "#1f2a27";
  let neongreen = "#d4df7d";
  let neonpink = "#ff15d8";
  let neonblue = "#0429fe";
  let purple = "#e0bfda";

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
  function StarsLight() {
    if (info && info.my_rating === 2) {
      return (
        <div className="rating-wrapper">
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightOutline}
            alt="star icon without fill"
          />
          <img
            className="star"
            src={StarLightOutline}
            alt="star icon without fill"
          />
          <img
            className="star"
            src={StarLightOutline}
            alt="star icon without fill"
          />
        </div>
      );
    } else if (info && info.my_rating === 3) {
      return (
        <div className="rating-wrapper">
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightOutline}
            alt="star icon without fill"
          />
          <img
            className="star"
            src={StarLightOutline}
            alt="star icon without fill"
          />
        </div>
      );
    } else if (info && info.my_rating === 4) {
      return (
        <div className="rating-wrapper">
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightOutline}
            alt="star icon without fill"
          />
        </div>
      );
    } else if (info && info.my_rating === 5) {
      return (
        <div className="rating-wrapper">
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
          <img
            className="star"
            src={StarLightSolid}
            alt="filled in star icon"
          />
        </div>
      );
    }
  }

  function StarsDark() {
    if (info && info.my_rating === 2) {
      return (
        <div className="rating-wrapper">
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img
            className="star"
            src={StarDarkOutline}
            alt="star icon without fill"
          />
          <img
            className="star"
            src={StarDarkOutline}
            alt="star icon without fill"
          />
          <img
            className="star"
            src={StarDarkOutline}
            alt="star icon without fill"
          />
        </div>
      );
    } else if (info && info.my_rating === 3) {
      return (
        <div className="rating-wrapper">
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img
            className="star"
            src={StarDarkOutline}
            alt="star icon without fill"
          />
          <img
            className="star"
            src={StarDarkOutline}
            alt="star icon without fill"
          />
        </div>
      );
    } else if (info && info.my_rating === 4) {
      return (
        <div className="rating-wrapper">
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img
            className="star"
            src={StarDarkOutline}
            alt="star icon without fill"
          />
        </div>
      );
    } else if (info && info.my_rating === 5) {
      return (
        <div className="rating-wrapper">
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
          <img className="star" src={StarDarkSolid} alt="filled in star icon" />
        </div>
      );
    }
  }

  function GenerateTags() {
    if (info) {
      let genres = info.genre.split(",");
      let formats = info.format.split(",");
      return (
        <div className="popup-tags">
          {formats.map((format) => (
            <div
              className="tags"
              style={{
                backgroundColor: mode === "day" ? neonpink : neongreen,
                color: mode === "day" ? light : dark,
              }}
            >
              {format}
            </div>
          ))}
          {genres.map((genre) => (
            <div
              className="tags"
              style={{
                backgroundColor: mode === "day" ? neonblue : purple,
                color: mode === "day" ? light : dark,
              }}
            >
              {genre}
            </div>
          ))}
        </div>
      );
    } else {
      return;
    }
  }

  function GenerateDate() {
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
  }

  return (
    <div
      className="popup-wrapper"
      ref={card}
      style={{
        display: popup ? "block" : "none",
        backgroundColor: mode === "day" ? light : dark,
        border: mode === "day" ? `2px solid ${dark}` : `2px solid ${light}`,
        boxShadow: mode === "day" ? `2px 3px ${dark}` : `2px 3px ${light}`,
      }}
    >
      <img
        className="xmark"
        src={mode === "day" ? XDark : XLight}
        onClick={() => {
          setPopup(0);
        }}
        alt="x icon"
      />
      <div className="popup-title-wrapper">
        <GenerateDate />
        <h3
          style={{ color: mode === "day" ? dark : light }}
          className="popup-title"
        >
          {info ? info.title : null}
        </h3>
        <p
          style={{ color: mode === "day" ? neonpink : neongreen }}
          className="popup-author"
        >
          {info ? info.author : null}
        </p>
        {info ? (
          <img className="popup-image" src={info.image} alt="book cover" />
        ) : null}
        {mode === "day" ? <StarsLight /> : <StarsDark />}
        <GenerateTags />
      </div>
    </div>
  );
}

export default Popup;
