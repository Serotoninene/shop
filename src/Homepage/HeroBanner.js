import React, { useEffect } from "react";
// gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { EasePack } from "gsap/EasePack";
// Utils
import chunkifyArray from "../Utilitaries/Tools/chunkifyArray";

export default function HeroBanner() {
  useEffect(() => {
    // Fragment the title into letters
    // let titleHTML = document.querySelector(".title").innerHTML;
    // titleHTML = title.split("");

    let textWrapper = document.querySelector(".title");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    console.log(textWrapper);

    gsap.registerPlugin(EasePack);
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      ease: Power3.easeOut,
    });
    let titleLetters = gsap.utils.toArray(".letter");
    let circles = gsap.utils.toArray(".Circle");

    /*
     * INTRODUCTION ANIMATION
     */

    // Introduction of the letters
    tl.from(titleLetters, {
      yPercent: 100,
      rotation: 10,
      stagger: 0.04,
      duration: 0.5,
    });
    // Stretching and replacing of the title
    tl.to(
      ".titleContainer",
      {
        scaleY: 4,
        yPercent: -100,
      },
      "<"
    );
    tl.to(
      ".titleContainer",
      {
        scaleY: 1,
        yPercent: -200,
      },
      ">1"
    );
    // At the same time appearance of the picture/color/I still don't really know
    tl.to(
      ".subPicture",
      {
        yPercent: -60,
      },
      "<"
    );
  }, []);

  return (
    <div
      id="HeroBanner"
      className="flex-column justify-end align-center hidden relative"
    >
      <h1 className="titleContainer relative hidden">
        <span className="title">SEROTONINE</span>{" "}
      </h1>{" "}
      {/* Picture beneath the title, appearing after the first animation */}
      <div className="subPicture absolute"></div>
    </div>
  );
}
