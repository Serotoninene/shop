import React, { useEffect } from "react";
// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Frames
import HeroBanner from "./HeroBanner.js";
import IllustrationShowcase from "./IllustrationShowcase.js";
import Presentation from "./Presentation.js";
// Components
import Footer from "../Components/Footer.js";

export default function Homepage(props) {
  const width = window.innerWidth;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: "#Homepage",
      start: "top top",
      endTrigger: "#IllustrationShowcase",
      end: "bottom bottom",
      // snap: width <= 570 ? false : 1 / 4,
    });
  }, [width]);

  return (
    <div id="Homepage">
      <HeroBanner />
      <Presentation />
      <IllustrationShowcase />
      <Footer />
    </div>
  );
}
