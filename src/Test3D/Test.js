import React, { useRef, Suspense } from "react";
// Threejs
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// React Three Fiber
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
// Debug ui
import * as dat from "lil-gui";
// Shade
import RagingSeaShaderMaterial from "../Utilitaries/Shaders/RagingSea/RagingSeaShaderMaterial";
import WaveShaderMaterial from "../Utilitaries/Shaders/WaveShaderMaterial";
import WavyPlane from "../Utilitaries/3DElements/WavyPlane";
import { Camera } from "three";

extend({
  OrbitControls,
});

new RagingSeaShaderMaterial();

const Sphere = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    let elapsedTime = clock.getElapsedTime();
    ref.current.rotation.x = 2 * elapsedTime;
  });

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[2, 32, 32]} />
      <ragingSeaShaderMaterial side={THREE.DoubleSide} />
    </mesh>
  );
};

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Scene = () => {
  const gui = new dat.GUI();
  console.log(Camera);

  return (
    <Canvas
      camera={{
        fov: 10,
        position: [10, 50, 0],
      }}
    >
      <CameraControls />
      <pointLight position={[10, 10, 10]} />{" "}
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>{" "}
    </Canvas>
  );
};

export default function Test() {
  return (
    <div id="Test">
      <Scene />
    </div>
  );
}
