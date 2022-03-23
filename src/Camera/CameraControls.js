import React, { useRef } from "react";
// Threejs
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// React Three Fiber
import { useThree, useFrame, extend } from "@react-three/fiber";

extend({ OrbitControls });

export default function CameraControls(props) {
  const { on } = props;
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();

  useFrame(() => {
    controls.current.update();
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enablePan={on}
      enableZoom={on}
      enableRotate={on}
    />
  );
}
