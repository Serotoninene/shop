import React, { useState, useEffect } from "react";
// React Router
import { Link, useLocation } from "react-router-dom";
//Components
import SideBarCart from "./SideBarCart";
// Gsap
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Assets
import caddieWhite from "../Assets/Icons/caddie_white.svg";
import caddieBlack from "../Assets/Icons/caddie_dark.svg";

export default function Navbar() {
  const [lightMode, setLightMode] = useState(true);
  const [cartOut, setCartOut] = useState(false);
  const [hover, setHover] = useState(false);
  let location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".Navbar2",
      {
        opacity: 0,
        yPercent: -100,
      },
      {
        yPercent: 0,
        // y: 0,
        opacity: 1,
        position: "fixed",
        ease: Power3.easeIn,
        duration: 0.5,
        scrollTrigger: {
          // markers: true,
          id: "Navbar",
          start: "top+=100px top",
        },
      }
    );
  }, []);

  return (
    <div>
      <nav
        id="Navbar"
        className={`flex justify-between align-center ${
          lightMode ? "lightMode" : ""
        }`}
      >
        <ul className="flex align-center">
          <li>
            <Link to="#Navbar"> Works </Link>{" "}
          </li>{" "}
          <li>
            <Link to="#Navbar"> About </Link>{" "}
          </li>{" "}
        </ul>{" "}
        <h1 className="text-center"> Serotoninene </h1>{" "}
        <div className="caddie flex justify-end">
          <img
            src={lightMode ? caddieBlack : caddieWhite}
            alt="panier"
            className="img-fluid"
            onClick={() => {
              setCartOut(!cartOut);
            }}
          />
        </div>{" "}
        <SideBarCart cartOut={cartOut} />
      </nav>
      <nav className={`Navbar2 flex justify-between align-center lightMode`}>
        <ul className="flex align-center">
          <li>
            <Link to="#Navbar"> Works </Link>{" "}
          </li>{" "}
          <li>
            <Link to="#Navbar"> About </Link>{" "}
          </li>{" "}
        </ul>{" "}
        <h1 className="text-center"> Serotoninene </h1>{" "}
        <div className="caddie flex justify-end">
          <img
            src={lightMode ? caddieBlack : caddieWhite}
            alt="panier"
            className="img-fluid"
            onClick={() => {
              setCartOut(!cartOut);
            }}
          />
        </div>{" "}
        <SideBarCart cartOut={cartOut} />
      </nav>
    </div>
  );
}
