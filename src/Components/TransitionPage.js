import React, { useRef, useEffect } from "react";
//gsap
import gsap, { Power3 } from "gsap";
//Wouter
import { useLocation } from "wouter";
// Framer-Motion
import { motion } from "framer-motion/dist/framer-motion";

export default function TransitionPage(props) {
  const transitionRef = useRef();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(transitionRef.current, {
      xPercent: -200,
      ease: Power3.easeIn,
      duration: 1,
    });
    tl.to(transitionRef.current, { xPercent: 200 });
  }, [location]);

  return (
    <div
      id="TransitionPage"
      // className="fixed"
      // ref={transitionRef}
      // style={{
      //   width: "100vw",
      //   height: "100vh",
      //   backgroundColor: "salmon",
      //   top: 0,
      //   left: "100vw",
      //   zIndex: 1,
      // }}
    ></div>
  );
}
