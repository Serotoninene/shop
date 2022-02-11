import React, { useEffect, useRef } from "react";
// react three fiber
import { useFrame, useThree } from "@react-three/fiber";
// gsap
import gsap, { Power3 } from "gsap";

export default function Box() {
  const boxRef = useRef();
  const { camera } = useThree();
  useFrame(({ clock }) => {
    let elapsedTime = clock.getElapsedTime();
    boxRef.current.rotation.x = elapsedTime * 0.5;
    boxRef.current.rotation.y = elapsedTime * 0.2;
  });

  useEffect(() => {
    // gsap.to(camera.position, {
    //   x: 10,
    //   y: 10,
    //   duration: 2,
    // });
  }, []);

  return (
    <mesh ref={boxRef}>
      <boxBufferGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}
