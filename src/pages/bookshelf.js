import React, { useState, useEffect, useRef } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Papa from "papaparse";
import Popup from "./popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

function Bookshelf() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState("2026");
  const [mode, setMode] = useState(null);
  const [style, setStyle] = useState(false);
  const [popup, setPopup] = useState(0);
  const [popupinfo, setPopupInfo] = useState(null);
  const [url, setUrl] = useState(
    "https://res.cloudinary.com/dvjavf8xh/raw/upload/v1767990676/csvs/2026_i9l45k.csv"
  );

  const card = useRef(null);

  let green = "#d4df7d";
  let pink = "#ff15d8";
  let light = "#eeeae3";
  let dark = "#1f2a27";

  useEffect(
    (active) => {
      Papa.parse(url, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          setItems(results.data);
        },
      });
    },
    [url]
  );

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
  }, [active]);

  return (
    <div>
      <Navbar active="Bookshelf" />
      <div className="bookshelf-wrapper">
        <p
          className="toggle-styles"
          id="styles-toggle"
          onClick={() => setStyle(!style)}
        >
          {style === false ? "SEE AS LIST" : "SEE AS COVERS"}
        </p>
        <h2 className="bookshelf-title">Bookshelf</h2>
        <div className="bookshelf-year-filter">
          <div
            className="bookshelf-year"
            onClick={() => {
              setActive("2026");
              setUrl(
                "https://res.cloudinary.com/dvjavf8xh/raw/upload/v1767990676/csvs/2026_i9l45k.csv"
              );
            }}
            style={{
              fontWeight: active === "2026" ? 800 : 400,
              marginLeft: active === "2026" ? "12px" : "0px",
            }}
          >
            <div
              className="active-marker"
              style={{ opacity: active === "2026" ? 1 : 0 }}
            />
            2026
          </div>
          <div
            onClick={() => {
              setActive("2025");
              setUrl(
                "https://res.cloudinary.com/dvjavf8xh/raw/upload/v1767990679/csvs/2025_egeidm.csv"
              );
            }}
            style={{
              fontWeight: active === "2025" ? 800 : 400,
              marginLeft: active === "2025" ? "12px" : "0px",
            }}
            className="bookshelf-year"
          >
            <div
              className="active-marker"
              style={{ opacity: active === "2025" ? 1 : 0 }}
            />
            2025
          </div>
          <div
            onClick={() => {
              setActive("2024");
              setUrl(
                "https://res.cloudinary.com/dvjavf8xh/raw/upload/v1767990676/csvs/2024_ymr4ka.csv"
              );
            }}
            className="bookshelf-year"
            style={{
              fontWeight: active === "2024" ? 800 : 400,
              marginLeft: active === "2024" ? "12px" : "0px",
            }}
          >
            <div
              className="active-marker"
              style={{ opacity: active === "2024" ? 1 : 0 }}
            />
            2024
          </div>
          <div
            onClick={() => {
              setActive("2023");
              setUrl(
                "https://res.cloudinary.com/dvjavf8xh/raw/upload/v1767990676/csvs/2023_xtjofz.csv"
              );
            }}
            className="bookshelf-year"
            style={{
              fontWeight: active === "2023" ? 800 : 400,
              marginLeft: active === "2023" ? "12px" : "0px",
            }}
          >
            <div
              className="active-marker"
              style={{ opacity: active === "2023" ? 1 : 0 }}
            />
            2023
          </div>
          <div
            onClick={() => {
              setActive("2022");
              setUrl(
                "https://res.cloudinary.com/dvjavf8xh/raw/upload/v1768023327/csvs/2022_lmbddu.csv"
              );
            }}
            style={{
              fontWeight: active === "2022" ? 800 : 400,
              marginLeft: active === "2022" ? "12px" : "0px",
            }}
            className="bookshelf-year"
          >
            <div
              className="active-marker"
              style={{ opacity: active === "2022" ? 1 : 0 }}
            />
            2022
          </div>
          <div
            onClick={() => {
              setActive("ALL");
              setUrl(
                "https://res.cloudinary.com/dvjavf8xh/raw/upload/v1767990676/csvs/combined_y1q8eo.csv"
              );
            }}
            className="bookshelf-year"
            style={{
              fontWeight: active === "ALL" ? 800 : 400,
              marginLeft: active === "ALL" ? "12px" : "0px",
            }}
          >
            <div
              className="active-marker"
              style={{ opacity: active === "ALL" ? 1 : 0 }}
            />
            ALL
          </div>
        </div>
        <p className="instructions">
          <FontAwesomeIcon
            icon={faHandPointer}
            style={{ paddingRight: "2px" }}
          />{" "}
          {style === false
            ? "Click on an image to learn more."
            : "Click on a title to learn more."}
        </p>
      </div>

      {style === false ? (
        <div className="book-wrapper-2">
          {items.map((item) => (
            <>
              <Popup
                info={popupinfo ? popupinfo : item}
                card={card}
                popup={popup}
                setPopup={setPopup}
                mode={mode}
                setMode={setMode}
              />
              <div className="book-item-2">
                {item.image != null ? (
                  <img
                    className={
                      mode === "day"
                        ? "book-item-image"
                        : "book-item-image hover"
                    }
                    src={item.image}
                    alt="book cover"
                    onClick={() => {
                      setPopup(!popup);
                      setPopupInfo(item);
                    }}
                  />
                ) : null}
                <p className="book-title-2">{item.title}</p>
                <span
                  className="book-author-2"
                  style={{ color: mode === "night" ? green : pink }}
                >
                  {item.author}
                </span>
              </div>
            </>
          ))}
        </div>
      ) : (
        <div className="book-wrapper">
          {items.map((item) => (
            <>
              <Popup
                info={popupinfo ? popupinfo : item}
                card={card}
                popup={popup}
                setPopup={setPopup}
                mode={mode}
              />
              <div
                className="book-item"
                onClick={() => {
                  setPopup(!popup);
                  setPopupInfo(item);
                }}
              >
                <p className="book-title">{item.title}</p>
                <span
                  className="book-author"
                  style={{ color: mode === "night" ? green : pink }}
                >{`[${item.author}]`}</span>
              </div>
            </>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Bookshelf;
