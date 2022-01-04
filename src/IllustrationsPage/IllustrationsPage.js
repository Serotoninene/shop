import React, { useState, useEffect } from "react";
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
  // width of one illustration - here is what I need to do :)
  // const illuWidth = x;
  // const x = (illuWidth + 20 ) * number of illustration
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.to(".illustrationsDisplay", {
      xPercent: -76,
    });
    // We gather all the images inside an array
    const illus = gsap.utils.toArray(".illustration img");
    tl.to(
      illus,
      {
        scale: 1.5,
      },
      "<"
    );

    ScrollTrigger.create({
      animation: tl,
      trigger: "#App",
      start: "top top",
      end: "bottom+=1000vh top",
      markers: true,
      id: "illustrations slide",
      scrub: true,
      pin: true,
      pinSpacing: false,
      // snap: 1 / 9,
    });
  }, []);

  return (
    <div id="IllustrationsPage" className="relative">
      <div className="titleArchive flex-column align-center">
        <div className="line"> </div>{" "}
        <h3 className="text-center"> Illustration Archive </h3>{" "}
        <div className="line"> </div>{" "}
      </div>{" "}
      <div className="illustrationsDisplay flex absolute">
        {" "}
        {illustrationsData.map((illu, idx) => (
          <IllustrationDisplay illu={illu} key={idx} />
        ))}{" "}
      </div>{" "}
    </div>
  );
}
