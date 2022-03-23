import React, { useEffect, useRef } from "react";
// React Router
import { Link, useLocation } from "wouter";
//Components
import Burger from "./Burger";
// Gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Assets
import logoSerotoninene from "../Assets/Logos/logoSerotoninene.png";

export default function Navbar() {
  const navbarRef = useRef();
  const [location] = useLocation();

  useEffect(() => {
    if (location === "/") {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "Navbar",
          start: "top top",
        },
      });
      tl.fromTo(
        navbarRef.current,
        {
          opacity: 0,
          yPercent: -100,
        },
        {
          opacity: 1,
          yPercent: 0,
        }
      );
    }

    return null;
  }, [location]);

  return (
    <nav
      ref={navbarRef}
      id="Navbar"
      className="flex justify-between align-center relative"
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
      </div>
    </nav>
  );
}
