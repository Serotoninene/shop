import React from "react";
// Frames
import HeroBanner from "./HeroBanner.js";
import IllustrationShowcase from "./IllustrationShowcase.js";
import Presentation from "./Presentation.js";

export default function Homepage() {
  return (
    <div id="Homepage">
      <HeroBanner />
      <Presentation />
      <IllustrationShowcase />
    </div>
  );
}
