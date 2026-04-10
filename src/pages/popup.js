import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import * as popupStyles from "../styles/modules/popup.module.less";

function Popup({ info, card, popup, setPopup }) {
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

  // close popup on esc
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
        <div className={popupStyles.ratingWrapper}>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.star}>
            <FontAwesomeIcon icon={farStar} />
          </span>
          <span className={popupStyles.star}>
            <FontAwesomeIcon icon={farStar} />
          </span>
          <span className={popupStyles.star}>
            <FontAwesomeIcon icon={farStar} />
          </span>
        </div>
      );
    } else if (info && info.my_rating === 3) {
      return (
        <div className={popupStyles.ratingWrapper}>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.star}>
            <FontAwesomeIcon icon={farStar} />
          </span>
          <span className={popupStyles.star}>
            <FontAwesomeIcon icon={farStar} />
          </span>
        </div>
      );
    } else if (info && info.my_rating === 4) {
      return (
        <div className={popupStyles.ratingWrapper}>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.star}>
            <FontAwesomeIcon icon={farStar} />
          </span>
        </div>
      );
    } else if (info && info.my_rating === 5) {
      return (
        <div className={popupStyles.ratingWrapper}>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={popupStyles.starSolid}>
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      );
    }
  }

  // split comma separated lists into arrays
  let genres;
  let formats;
  if (info) {
    genres = info.genre.split(",");
    formats = info.format.split(",");
  }

  // format date
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
        <p className={`${popupStyles.popupDate} popup-date`}>
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
    info && (
      <div
        className={`${popupStyles.popupWrapper} popup-wrapper`}
        ref={card}
        style={{
          display: popup && info ? "block" : "none",
        }}
      >
        <span
          className={`${popupStyles.xmark} xmark`}
          onClick={() => {
            setPopup(0);
          }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            style={{
              paddingRight: "2px",
            }}
          />
        </span>
        <div className={`${popupStyles.popupTitleWrapper} popup-title-wrapper`}>
          <GenerateDate />
          <h3 className={`${popupStyles.popupTitle} popup-title`}>
            {info ? info.title : null}
          </h3>
          <p className={`${popupStyles.popupAuthor} popup-author`}>
            {info ? info.author : null}
          </p>
          {info ? (
            <img
              className={`${popupStyles.popupImage} popup-image`}
              src={info.image}
              alt="book cover"
            />
          ) : null}
          <Stars />
          {info && info.notes ? (
            <>
              <p
                className={`${popupStyles.popupNotesKicker} popup-notes-kicker`}
              >
                {" "}
                <span>NOTES:</span>
              </p>
              <p
                className={`${popupStyles.popupNotes} popup-notes`}
                dangerouslySetInnerHTML={{ __html: info.notes }}
              ></p>
            </>
          ) : null}
          {info ? (
            <div className={`${popupStyles.popupTags} popup-tags`}>
              {formats.map((format) => (
                <div className={`${popupStyles.tagsForm} tags-form`}>
                  {format}
                </div>
              ))}
              {genres.map((genre) => (
                <div className={`${popupStyles.tagsGenre} tags-genre`}>
                  {genre}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    )
  );
}

export default Popup;
