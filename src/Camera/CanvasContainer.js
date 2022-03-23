import React, { Suspense } from "react";
// React Three Fiber
import { Canvas } from "@react-three/fiber";

export default function CanvasContainer(props) {
  const { fov, position, orthographicCam } = props;
  return (
    <Canvas
      orthographic={orthographicCam}
      camera={{
        fov: fov,
        position: position,
      }}
    >
      <Suspense fallback={null}>{props.children}</Suspense>
    </Canvas>
  );
}
