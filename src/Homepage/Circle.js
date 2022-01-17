import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Function used to display random circles around the page, wanted to make them react with the mouse creating a kind of parallax
// but slows the app drastically. Gonna remove them for now
export default function Circle(props) {
  const circleRef = useRef();
  let { numero } = props;
  let top = Math.random() * 100;
  let left = Math.random() * 100;
  let size = Math.random() * 10;
  const colors = [
    "#eca376",
    "#dc624d",
    "#4a7d6c",
    "#C97062",
    "#002d44",
    "#A38D78",
    "#5A3B36",
  ];
  let colorPicker = Math.floor(Math.random() * colors.length);

  return (
    <div
      ref={circleRef}
      className={`Circle absolute ${numero}`}
      style={{
        top: `${top}vh`,
        left: `${left}vw`,
        width: `${size}vh`,
        height: `${size}vh`,
        backgroundColor: `${colors[colorPicker]}`,
      }}
    ></div>
  );
}
