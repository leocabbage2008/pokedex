import React from "react";

export default function Block({ text, clickHandler, index }) {
  return (
    <div className="block" onClick={(e) => clickHandler(text, index)}>
      <p>{text}</p>
    </div>
  );
}
