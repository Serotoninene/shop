import React, { useEffect, useRef } from "react";
// react three fiber
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
// utils
import lerp from "../Utilitaries/Tools/lerp";

export default function IllustrationPlane(props) {
  const { data, position } = props;
  const meshRef = useRef();
  const illustrationTexture = useLoader(TextureLoader, data.img);

  useFrame((state) => {
    let mouseX = state.mouse.x;
    let mouseY = state.mouse.y;
  });

  return (
    <mesh
      ref={meshRef}
      position={[position.x, position.y, position.z]}
      onClick={() => {}}
    >
      <planeBufferGeometry args={[1.627, 2.19, 1, 1]} />
      <meshBasicMaterial map={illustrationTexture} wireframe={false} />
    </mesh>
  );
}
