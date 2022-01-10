import React, { useEffect } from "react";
// gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { EasePack } from "gsap/EasePack";
// Component
import Circle from "./Circle";

export default function HeroBanner() {
  useEffect(() => {
    gsap.registerPlugin(EasePack);
    gsap.registerPlugin(ScrollTrigger);
    console.log(EasePack);
    let tl = gsap.timeline({
      ease: Power3.easeOut,
    });
    let titles = gsap.utils.toArray(".title");
    let circles = gsap.utils.toArray(".Circle");

    // Introduction animation
    tl.from(".illustrationFrame", {
      top: "10vh",
      left: "5vw",
      width: "90vw",
      height: "80vh",
      duration: 1,
      ease: EasePack.SlowMo(0, 0.5),
    });
    tl.from(titles, {
      yPercent: 200,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(
      circles,
      {
        y: "100vh",
        opacity: 0,
      },
      "<"
    );

    tl.to(
      "#HeroBanner",
      {
        y: "-40vh",
        ease: Power3.easeOut,
        // scrollTrigger: {
        //   trigger: "#HeroBanner",
        //   start: "top+=1 top",
        //   end: "bottom top",
        //   markers: true,
        //   scrub: 1,
        //   id: "tentativedeparallax",
        // },
      },
      "<"
    );
  }, []);

  return (
    <div id="HeroBanner" className="flex-column justify-between relative">
      <div className="exploration flex justify-center">
        <h1 className="hidden">
          <span className="title"> An Exploration </span>{" "}
        </h1>{" "}
      </div>{" "}
      <div className="illustrationFrame absolute flex justify-center align-center">
        <div className="illustrationEyes"> </div>{" "}
      </div>{" "}
      <div className="color flex justify-center align-end">
        <h1 className="hidden">
          <span className="title"> SEROTONINENEN </span>{" "}
        </h1>{" "}
      </div>
      {/* Group of parallaxing circles boiiii */} <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </div>
  );
}
