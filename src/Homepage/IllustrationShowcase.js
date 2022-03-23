import React, { useRef } from "react";
// Components
import ShowcaseOneIllu from "../Components/ShowcaseOneIllu";
// Assets
import { illustrationsData } from "../Utilitaries/Data/illustrationsData";

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

  return (
    <div ref={illustrationShowcaseRef} id="IllustrationShowcase">
      {illustrationsDisplayed.map((illu, i) => (
        <ShowcaseOneIllu
          key={i}
          paragraphHP={illu.paragraphHP}
          illustration={illu.img}
          illustrationName={illu.title}
          id={illu.id}
        />
      ))}
    </div>
  );
}
