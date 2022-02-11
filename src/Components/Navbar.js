import React, { useState, useEffect, useRef } from "react";
// React Router
import { Link } from "wouter";
//Components
import SideBarCart from "./SideBarCart";
import Burger from "./Burger";
// Gsap
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Assets
import logoSerotoninene from "../Assets/Logos/logoSerotoninene.png";

export default function Navbar() {
  const navbarRef1 = useRef();
  const navbarRef2 = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        id: "Navbar",
        start: "top+=100px top",
      },
    });

    tl.to(navbarRef1.current, {
      display: "none",
    });

    tl.fromTo(
      navbarRef2.current,
      {
        opacity: 0,
        yPercent: -100,
      },
      {
        yPercent: 0,
        opacity: 1,
        position: "fixed",
        ease: Power3.easeIn,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <div>
      <nav
        ref={navbarRef1}
        id="Navbar"
        className="flex justify-between align-center "
      >
        <Link href="/" className="navbarLink">
          <div className="logoSerotoninene">
            <img
              src={logoSerotoninene}
              alt="Serotoninene's logo"
              className="img-fluid"
            />
          </div>
        </Link>
        <div className="flex justify-end">
          <Burger />
        </div>{" "}
      </nav>{" "}
      <nav
        ref={navbarRef2}
        className="Navbar2 flex justify-between align-center"
      >
        <Link href="/" className="navbarLink">
          <div className="logoSerotoninene">
            <img
              src={logoSerotoninene}
              alt="Serotoninene's logo"
              className="img-fluid"
            />
          </div>
        </Link>
        <div className="flex justify-end">
          <Burger />
        </div>{" "}
      </nav>{" "}
    </div>
  );
}
