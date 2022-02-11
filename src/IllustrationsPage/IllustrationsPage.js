import React, { useState, useEffect, useRef } from "react";
import ErrorBoundary from "../Utilitaries/Tools/ErrorBoundary";
// React Router
import { Link } from "react-router-dom";
// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Utilitaries
// Assets
import { illustrationsData } from "../Utilitaries/Data/illustrationsData";
import IllustrationDisplay from "./IllustrationDisplay";

export default function IllustrationsPage() {
  const illustrationDisplayRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    // //// The timeline is making my react router Links crash, no clue of why
    // tl.to(illustrationDisplayRef.current, {
    //   xPercent: -76,
    // });

    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: "#IllustrationsPage",
    //   start: "top top",
    //   end: "bottom bottom-=50px",
    //   id: "illustrations slide",
    //   scrub: true,
    //   pin: true,
    //   pinSpacing: false,
    //   // markers: true,
    //   // snap: 1 / 9,
    // });
  }, []);

  return (
    <div id="IllustrationsPage" className="relative">
      <div className="titleArchive flex-column align-center">
        <div className="line"> </div>
        <h3 className="text-center"> Illustrations </h3>
        <div className="line"> </div>
      </div>
      <Link to="/test">Click</Link>
      <div
        ref={illustrationDisplayRef}
        className="illustrationsDisplay flex absolute"
      >
        {illustrationsData.map((illu, idx) => (
          <IllustrationDisplay illu={illu} key={idx} />
        ))}
      </div>
    </div>
  );
}
