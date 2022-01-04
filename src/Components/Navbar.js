import React, { useState, useEffect } from "react";
// React Router
import { Link, useLocation } from "react-router-dom";
//Components
import SideBarCart from "./SideBarCart";
// Assets
import caddieWhite from "../Assets/Icons/caddie_white.svg";
import caddieBlack from "../Assets/Icons/caddie_dark.svg";

export default function Navbar() {
  const [lightMode, setLightMode] = useState(false);
  const [cartOut, setCartOut] = useState(false);
  let location = useLocation();

  useEffect(() => {
    location.pathname !== "/" ? setLightMode(true) : setLightMode(false);
  }, [location]);

  return (
    <nav
      id="Navbar"
      className={`flex justify-between align-center ${
        lightMode ? "lightMode fixed" : ""
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
  );
}
