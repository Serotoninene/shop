import React, { useEffect, useRef } from "react";
// Components
import Model3D from "./Model3D";
// gsap
import gsap, { Linear, Power1, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { EasePack } from "gsap/EasePack";
// Assets
import scrollIndicator from "../Assets/Icons/scrollIndicator.svg";

export default function HeroBanner() {
  const subPictureRef = useRef();
  const titleContainerRef = useRef();
  const titleRef = useRef();
  const scrollIndicatorRef = useRef();

  useEffect(() => {
    // Fragment the title into letters
    let textWrapper = titleRef.current;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    /*x
     * INTRODUCTION ANIMATION
     */
    // Setup
    gsap.registerPlugin(EasePack);
    gsap.registerPlugin(ScrollTrigger);
    let mainTL = gsap.timeline({
      ease: Power3.easeIn,
      autoRemoveChildren: true,
    });
    let scrollIndicatoTl = gsap.timeline({ repeat: -1 });
    let titleLetters = gsap.utils.toArray(".letter");

    // Introduction of the letters
    mainTL.from(
      titleLetters,
      {
        yPercent: 250,
        rotation: 10,
        stagger: 0.05,
        duration: 0.25,
      },
      "1"
    );
    // Stretching and replacing of the title
    mainTL.to(titleContainerRef.current, {
      scaleY: 4,
      yPercent: -180,
      ease: Power3.easeIn,
    });
    mainTL.to(
      titleContainerRef.current,
      {
        scaleY: 1,
        yPercent: -300,
      },
      ">"
    );
    // appearance of the canvas/scroll Indicator
    mainTL.to(
      subPictureRef.current,
      {
        yPercent: -95,
        height: "100vh",
        duration: 1,
      },
      "<"
    );

    mainTL.fromTo(
      scrollIndicatorRef.current,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 0.5,
        ease: Power3.easeOut,
      }
    );
    mainTL.to(subPictureRef.current, {
      position: 0.2,
    });

    scrollIndicatoTl.to(
      scrollIndicatorRef.current,
      {
        rotate: "362",
        duration: 10,
        ease: Linear.easeNone,
      },
      "<"
    );

    return () => {};
  }, []);

  return (
    <div
      id="HeroBanner"
      className="section flex-column justify-end align-center hidden relative"
    >
      <h1
        ref={titleContainerRef}
        className="titleContainer relative hidden flex justify-center"
      >
        <span ref={titleRef} className="title">
          Serotoninene
        </span>
      </h1>

      <div className="scrollIndicator absolute hidden">
        <img
          ref={scrollIndicatorRef}
          src={scrollIndicator}
          className="img-fluid"
        />
      </div>
      {/* Picture beneath the title, appearing after the first animation */}
      <div ref={subPictureRef} className="subPicture absolute">
        <Model3D />
      </div>
    </div>
  );
}
