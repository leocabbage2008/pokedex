import React from "react";

export default function Popup({ display, text, img1, img2, clickHandler }) {
  return (
    <div className="popup" id={display ? "" : "hidden"}>
      <button onClick={clickHandler} id="popup-btn">
        Close
      </button>
      <h1>{text}</h1>
      <img src={img1} alt="front" />
      <img src={img2} alt="back" />
    </div>
  );
}
