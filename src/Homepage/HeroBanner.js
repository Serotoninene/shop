import React, { useEffect, Suspense } from "react";
// gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { EasePack } from "gsap/EasePack";
// React Three Fiber
import { Canvas } from "@react-three/fiber";
// 3D Elements
import WaveShaderMaterial from "../Utilitaries/Shaders/WaveShaderMaterial";
import WavyPlane from "../Utilitaries/3DElements/WavyPlane";

export default function HeroBanner() {
  new WaveShaderMaterial();

  useEffect(() => {
    // Fragment the title into letters
    let textWrapper = document.querySelector(".title");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    gsap.registerPlugin(EasePack);
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      ease: Power3.easeOut,
    });
    let titleLetters = gsap.utils.toArray(".letter");

    /*
     * INTRODUCTION ANIMATION
     */
    // Introduction of the letters
    tl.from(titleLetters, {
      yPercent: 100,
      rotation: 10,
      stagger: 0.04,
      duration: 0.5,
    });
    // Stretching and replacing of the title
    tl.to(
      ".titleContainer",
      {
        scaleY: 5,
        yPercent: -200,
      },
      "<"
    );
    tl.to(
      ".titleContainer",
      {
        scaleY: 1,
        yPercent: -200,
      },
      ">1"
    );
    // At the same time appearance of the picture/color/I still don't really know
    tl.to(
      ".subPicture",
      {
        yPercent: -60,
      },
      "<"
    );
  }, []);

  // Setting up of the 3D Scene with threejs

  const Scene = () => {
    return (
      <Canvas
        camera={{
          fov: 10,
          position: [0, 0, 2],
        }}
      >
        <pointLight position={[10, 10, 10]} />{" "}
        <Suspense fallback={null}>
          <WavyPlane />
        </Suspense>{" "}
      </Canvas>
    );
  };

  return (
    <div
      id="HeroBanner"
      className="flex-column justify-end align-center hidden relative"
    >
      <h1 className="titleContainer relative hidden flex justify-center">
        <span className="title"> SEROTONINEne </span>{" "}
      </h1>{" "}
      {/* Picture beneath the title, appearing after the first animation */}{" "}
      <div className="subPicture absolute">
        <Scene />
      </div>{" "}
    </div>
  );
}
