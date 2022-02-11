import React, { useEffect } from "react";
// gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Frames
import HeroBanner from "./HeroBanner.js";
import IllustrationShowcase from "./IllustrationShowcase.js";
import Presentation from "./Presentation.js";
import Footer from "../Components/Footer.js";

export default function Homepage() {
  const sections = gsap.utils.toArray(".section");
  const sectionsLength = sections.length;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: "#Homepage",
      start: "top top",
      endTrigger: "#IllustrationShowcase",
      end: "bottom bottom",
      snap: 1 / 4,
    });
  }, []);

  return (
    <div id="Homepage">
      <HeroBanner />
      <Presentation />
      <IllustrationShowcase />
      <Footer />
    </div>
  );
}
