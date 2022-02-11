import React, { useEffect, useRef } from "react";
// gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Component
import Button from "./Button";

export default function ShowcaseOneIllu(props) {
  const { illustration, illustrationName } = props;
  const showcaseOneIlluRef = useRef();
  const illustrationRef = useRef();
  const presentationRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: showcaseOneIlluRef.current,
        // markers: true,
        id: `${illustrationName}`,
        start: "top bottom-=10%",
        scrub: true,
      },
    });

    tl.fromTo(
      illustrationRef.current,
      {
        yPercent: 5,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        ease: Power3.easeOut,
      }
    );
    tl.fromTo(
      presentationRef.current,
      {
        opacity: -5,
        opacity: 0,
      },
      { yPercent: 0, opacity: 1, ease: Power3.easeOut },
      "<0.1"
    );
  }, []);

  return (
    <div
      ref={showcaseOneIlluRef}
      className="ShowcaseOneIllu section flex justify-between align-center"
    >
      <div className="illustration">
        <img
          src={illustration}
          alt="illustration"
          className="img-fluid"
          ref={illustrationRef}
        ></img>
      </div>
      <div
        className="illustrationPresentation flex-column justify-around align-center"
        ref={presentationRef}
      >
        <h3> {illustrationName} </h3>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          purus tellus, cursus ut feugiat vel, convallis in nisl. Aenean lacinia
          justo metus. Quisque ut aliquam sem. Nulla et porta mauris.
        </p>
        <Button content="Purchase a print" linkTo="#" />
      </div>
    </div>
  );
}
