import React, { useEffect, useRef } from "react";
//gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Components
import ShowcaseOneIllu from "../Components/ShowcaseOneIllu";
import Button from "../Components/Button";
// Assets
import { illustrationsData } from "../Utilitaries/Data/illustrationsData";
import regardBrulant from "../Assets/Images/regard_brulant.jpg";

export default function IllustrationShowcase() {
  const illustrationsDisplayed = [];
  const illustrationShowcaseRef = useRef();

  illustrationsData.forEach((illu) => {
    if (
      illu.id === Number(1) ||
      illu.id === Number(2) ||
      illu.id === Number(3)
    ) {
      illustrationsDisplayed.push(illu);
    }
  });

  useEffect(() => {
    illustrationsDisplayed.forEach((element, i) => {
      let className = element.title.replace(/ /g, "_");

      // ScrollTrigger.create({
      //   trigger: "#ShowcaseOneIllu",
      //   start: `top+=${i * 100}% center-=20%`,
      //   markers: true,
      //   scrub: 0.5,
      // });

      // tl.fromTo(illustrationRef.current, { opacity: 0 }, { opacity: 1 });
    });
  }, []);

  return (
    <div ref={illustrationShowcaseRef} id="IllustrationShowcase">
      {illustrationsDisplayed.map((illu, i) => (
        <ShowcaseOneIllu
          key={i}
          illustration={illu.img}
          illustrationName={illu.title}
        />
      ))}
    </div>
  );
}
