import react, { useEffect, useRef, Suspense, useState } from "react";
//react three fiber
import { TextureLoader } from "three";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  useScroll,
  Image,
  useProgress,
  Html,
} from "@react-three/drei";
// gsap
import gsap from "gsap";
// wouter
import { useLocation } from "wouter";
// Data
import { illustrationsData } from "../Utilitaries/Data/illustrationsData";

const Sprite = (props) => {
  // From the parent
  const { illustration, position, w, h, index, numberOfIllustrations, idx } =
    props;

  // Refs
  const groupRef = useRef();
  const spriteRef = useRef();

  // States
  const [location, setLocation] = useLocation();
  const [hovered, setHovered] = useState(false);
  const scrollData = useScroll();

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // useEffect(() => {
  //   gsap.to(groupRef.current, {
  //     opacity: 0.6,
  //   });
  // }, []);

  useFrame((delta) => {
    const y = scrollData.curve(
      index / numberOfIllustrations - 1.5 / numberOfIllustrations,
      4 / numberOfIllustrations
    );
    spriteRef.current.material.scale[1] = spriteRef.current.scale.y = h + y;
    spriteRef.current.position.z = scrollData.delta * 10;
  });

  return (
    <Image
      ref={spriteRef}
      url={illustration}
      position={position}
      scale={[w, h, 1]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setLocation(`/illustrations/${idx}`)}
    />
  );
};

function Scene({ w = 3.2, h = 4.4, gap = 0.3 }) {
  const illustrations = [];
  const groupRef = useRef();
  const spriteRef = useRef();
  illustrationsData.forEach((illu) => illustrations.push(illu.img));

  const { width } = useThree((state) => state.viewport);
  const numberOfIllustrations = illustrationsData.length;
  const xW = w + gap;

  return (
    <ScrollControls
      horizontal
      damping={10}
      pages={(width - xW + numberOfIllustrations * xW) / width}
    >
      <Scroll>
        <Suspense fallback={null}>
          <group ref={groupRef}>
            {illustrations.map((illu, idx) => (
              <Sprite
                ref={spriteRef}
                illustration={illu}
                idx={idx}
                key={idx}
                index={idx}
                position={[idx * xW, -1, 0]}
                numberOfIllustrations={numberOfIllustrations}
                w={w}
                h={h}
              />
            ))}
          </group>
        </Suspense>
      </Scroll>
    </ScrollControls>
  );
}

function Loader() {
  const { progress } = useProgress();
  return <Html center> {progress} % loaded </Html>;
}

export default function IllustrationsPageResponsive() {
  const titleRef = useRef();
  const subTitleRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    const animArray = [titleRef.current, subTitleRef.current];

    tl.fromTo(
      animArray,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
      }
    );
  }, []);
  return (
    <div id="Test" className="flex justify-center">
      <div className="absolute">
        <h1 className="hidden">
          <span ref={titleRef}> Illustrations </span>
        </h1>
        <p className="hidden text-end">
          <span ref={subTitleRef}> by Serotoninene </span>
        </p>
      </div>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
