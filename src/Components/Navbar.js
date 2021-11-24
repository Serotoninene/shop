import React from "react";
// Assets
import caddieWhite from "../Assets/Icons/caddie_white.svg";

export default function Navbar() {
  return (
    <nav id="Navbar" className="flex justify-between align-center">
      <ul className="flex align-center">
        <li>
          <a href="#Navbar">Works</a>
        </li>
        <li>
          <a href="#Navbar">About</a>
        </li>
      </ul>

      <h1 className="text-center">Serotoninene</h1>

      <div className="caddie flex justify-end">
        <img src={caddieWhite} alt="panier" className="img-fluid" />
      </div>
    </nav>
  );
}
