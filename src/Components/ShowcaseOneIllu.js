import React, { useEffect, useRef } from "react";
// gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// wouter
import { Link } from "wouter";
// Component
import Button from "./Button";

export default function ShowcaseOneIllu(props) {
  const { illustration, illustrationName, id, paragraphHP } = props;
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
        yPercent: 50,
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
        yPercent: -5,
        opacity: 0,
      },
      { yPercent: 0, opacity: 1, ease: Power3.easeOut },
      "<0.1"
    );
  }, [illustrationName]);

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
        className="illustrationPresentation flex-column justify-between align-center"
        ref={presentationRef}
      >
        <h3> {illustrationName.toUpperCase()} </h3>
        <p>
          {" "}
          Printed with high quality ink on 200g paper. Pieces numbered and
          signed by hand.
        </p>
        <p className="price">
          <Link href={`/illustrations`}>
            Price : <span>20$ </span>{" "}
          </Link>
        </p>
        <Button content="Purchase a print" linkTo={`/illustrations/${id}`} />
      </div>
    </div>
  );
}
