import React from "react";

export default function Presentation() {
  return (
    <div id="Presentation">
      <article className="img-fluid flex justify-between align-center">
        <h2>
          Le bal <br />
          des <br />
          <span>vampires</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          purus tellus, cursus ut feugiat vel, convallis in nisl. Aenean lacinia
          justo metus. Quisque ut aliquam sem. Nulla et porta mauris. Donec
          libero nunc, cursus vitae mauris vitae, ullamcorper tincidunt felis.
        </p>
      </article>
      <section className="flex justify-center">
        <a href="/gallery"> View Gallery</a>
      </section>
    </div>
  );
}
