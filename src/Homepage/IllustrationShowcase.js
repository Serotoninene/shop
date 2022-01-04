import React from "react";
// Components
import ShowcaseOneIllu from "../Components/ShowcaseOneIllu";
// Assets
import regardBrulant from "../Assets/Images/regard_brulant.jpg";

export default function IllustrationShowcase() {
  return (
    <div id="IllustrationShowcase">
      <ShowcaseOneIllu
        illustration={regardBrulant}
        illustrationName="Regard Brulant"
        illustrationDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus tellus, cursus ut feugiat vel, convallis in nisl. Aenean lacinia justo metus. Quisque ut aliquam sem. Nulla et porta mauris. "
      />
      <ShowcaseOneIllu
        illustration={regardBrulant}
        illustrationName="Regard Brulant"
        illustrationDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus tellus, cursus ut feugiat vel, convallis in nisl. Aenean lacinia justo metus. Quisque ut aliquam sem. Nulla et porta mauris. "
      />
      <ShowcaseOneIllu
        illustration={regardBrulant}
        illustrationName="Regard Brulant"
        illustrationDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus tellus, cursus ut feugiat vel, convallis in nisl. Aenean lacinia justo metus. Quisque ut aliquam sem. Nulla et porta mauris. "
      />
      <ShowcaseOneIllu
        illustration={regardBrulant}
        illustrationName="Regard Brulant"
        illustrationDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus tellus, cursus ut feugiat vel, convallis in nisl. Aenean lacinia justo metus. Quisque ut aliquam sem. Nulla et porta mauris. "
      />
    </div>
  );
}
