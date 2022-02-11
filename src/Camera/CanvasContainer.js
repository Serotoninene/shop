import React, { Suspense } from "react";
// React Three Fiber
import { Canvas } from "@react-three/fiber";
// Camera Controls
import CameraControls from "./CameraControls";

export default function CanvasContainer(props) {
  const { fov, position } = props;
  return (
    <Canvas
      camera={{
        fov,
        position,
      }}
    >
      <Suspense fallback={null}>{props.children}</Suspense>
    </Canvas>
  );
}
