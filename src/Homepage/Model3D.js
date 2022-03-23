import React, { Suspense } from "react";
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
        <CameraControls on={false} /> <HPCameraAnimation />
        <Suspense fallback={null}>
          <WavyPlane
            position={{
              posX: 0,
              posY: 0,
              posZ: 0,
            }}
          />
        </Suspense>
      </CanvasContainer>
    </div>
  );
}
