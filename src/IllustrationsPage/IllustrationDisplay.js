import React, { useState } from "react";
// ProgressiveImage : allows to load a compressed version of an image before the good quality one -> improves performance
import ProgressiveImage from "react-progressive-image";
// React Router
import { Link } from "wouter";

export default function IllustrationDisplay(props) {
  const [hovered, setHovered] = useState(false);
  const { illu } = props;

  return (
    <div id="IllustrationDisplay">
      <Link href={`/illustrations/${illu.id}`}>
        <div
          className="illustration relative"
          key={illu.id}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <img
            src={illu.img}
            className={`img-fluid ${hovered ? "blur" : ""}`}
          />
          <div
            className={` ${
              hovered
                ? "hoverIndications absolute flex justify-center align-center"
                : "none"
            }`}
          >
            Click to view{" "}
          </div>{" "}
        </div>{" "}
      </Link>{" "}
    </div>
  );
}
