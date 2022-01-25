import React, { useRef, Suspense } from "react";
// ThreeJs
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// React Three Fiber
import { useFrame, useLoader } from "@react-three/fiber";

export default function WavyPlane() {
  const ref = useRef();
  const [image] = useLoader(TextureLoader, ["Venus.jpg"]);

  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeBufferGeometry args={[0.4, 0.1, 16, 16]} />{" "}
      <waveShaderMaterial
        uColor="blue"
        ref={ref}
        wireframe={false}
        uTexture={image}
        side={THREE.DoubleSide}
      />{" "}
    </mesh>
  );
}
