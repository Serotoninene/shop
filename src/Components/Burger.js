import React, { useState } from "react";
// Component
import Menu from "./Menu";

export default function Burger() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Menu open={clicked} setOpen={setClicked} />
      <div
        id="Burger"
        className="flex-column justify-between align-center"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <div className={`line ${clicked ? "closingIcon" : ""}`}></div>
        <div className={`line ${clicked ? "closingIcon" : ""}`}></div>
        <div className={`line ${clicked ? "closingIcon" : ""}`}></div>
      </div>
    </div>
  );
}
