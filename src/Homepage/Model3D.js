import React, { useState } from "react";
// Threejs
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend } from "@react-three/fiber";
//Component
import CanvasContainer from "../Camera/CanvasContainer";
import WavyPlane from "../3DElements/WavyPlane";
// Camera Animation
import HPCameraAnimation from "../Camera/Animations/HPCameraAnimation";
import CameraControls from "../Camera/CameraControls";

export default function Model3D() {
  return (
    <div id="Model3D">
      <CanvasContainer fov={5} position={[10000, -26, 12.5]}>
        <CameraControls on={false} />
        <HPCameraAnimation />
        <WavyPlane
          position={{
            posX: 0,
            posY: 0,
            posZ: 0,
          }}
        />
      </CanvasContainer>
    </div>
  );
}
