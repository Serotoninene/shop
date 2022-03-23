import React, { useEffect, useRef, useState } from "react";
// react three fiber
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
// Wooter
import { useLocation } from "wouter";
// utils
import lerping from "../Utilitaries/Tools/lerping";
import getRandomNumber from "../Utilitaries/Tools/getRandomNumber";
import mapping from "../Utilitaries/Tools/mapping";

export default function IllustrationPlane(props) {
  const { data, position, addMesh } = props;
  const [hover, setHover] = useState(false);
  const meshRef = useRef();
  const illustrationTexture = useLoader(TextureLoader, data.img);
  const [location, setLocation] = useLocation();

  // Utils for animation
  const { viewport } = useThree();

  // get random start and end movement boundaries
  const xstart = getRandomNumber(15, 60);
  const ystart = getRandomNumber(15, 30);
  // amount to move in each axis

  useFrame((state) => {
    let translationVals = {
      tx: position.x,
      ty: position.y,
    };
    translationVals.tx = lerping(
      translationVals.tx,
      mapping(state.mouse.x, -viewport.width, viewport.width, -xstart, xstart),
      0.07
    );
    translationVals.ty = lerping(
      translationVals.ty,
      mapping(
        state.mouse.y,
        -viewport.height,
        viewport.height,
        -ystart,
        ystart
      ),
      0.07
    );

    meshRef.current.position.x = translationVals.tx;
    meshRef.current.position.y = -translationVals.ty;
  });

  useEffect(() => {
    addMesh(meshRef);
  }, []);

  useEffect(() => {
    document.body.style.cursor = hover ? "pointer" : "auto";
  }, [hover]);

  return (
    <mesh
      ref={meshRef}
      position={[position.x, position.y, position.z]}
      scale={[0.5, 0.5, 0.5]}
      onClick={() => {
        setLocation(`/illustrations/${data.id}`);
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <planeBufferGeometry args={[1.627, 2.19, 1, 1]} />
      <meshBasicMaterial
        map={illustrationTexture}
        // wireframe={true}
        transparent={true}
        opacity={0}
      />
    </mesh>
  );
}
