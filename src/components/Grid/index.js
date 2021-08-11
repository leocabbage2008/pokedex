import React from "react";
import Block from ".././Block";

export default function Grid({ content, clickHandler }) {
  return (
    <div className="grid">
      {content.map((obj) => {
        return (
          <Block
            text={obj.name}
            clickHandler={clickHandler}
            key={content.indexOf(obj)}
            index={content.indexOf(obj)}
          />
        );
      })}
    </div>
  );
}
