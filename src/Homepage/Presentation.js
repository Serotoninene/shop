import React, { useEffect, useRef } from "react";
//gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// React Router Dom
import { Link } from "wouter";

export default function Presentation() {
  const titleRef = useRef();
  const textRef = useRef();
  const linkRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Presentation",
        start: "top center-=20%",
        toggleActions: "play pause pause reverse",
      },
    });

    tl.fromTo(
      titleRef.current,
      {
        yPercent: 20,
        opacity: 0,
        duration: 1,
        ease: Power3.easeOut,
      },
      { yPercent: 0, opacity: 1 }
    );
    tl.fromTo(
      textRef.current,
      {
        yPercent: -20,
        opacity: 0,
        duration: 1,
        ease: Power3.easeOut,
      },
      { yPercent: 0, opacity: 1 },
      "<"
    );
    tl.fromTo(
      linkRef.current,
      {
        yPercent: 10,
        opacity: 0,
      },
      { yPercent: 0, opacity: 1 },
      ">+=1"
    );
  }, []);

  return (
    <div id="Presentation">
      <article className="section img-fluid flex justify-between align-center">
        <h2 ref={titleRef}>
          Le bal <br />
          des <br />
          <span> vampires </span>{" "}
        </h2>{" "}
        <p ref={textRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus
          purus tellus, cursus ut feugiat vel, convallis in nisl.Aenean lacinia
          justo metus.Quisque ut aliquam sem.Nulla et porta mauris.Donec libero
          nunc, cursus vitae mauris vitae, ullamcorper tincidunt felis.{" "}
        </p>{" "}
      </article>{" "}
      <section ref={linkRef} className="flex justify-center">
        <Link href="/illustrations"> View Gallery </Link>{" "}
      </section>{" "}
    </div>
  );
}
