import React from "react";
//3D Components
import CanvasContainer from "../Camera/CanvasContainer";
import CameraControls from "../Camera/CameraControls";
import Illustrations3DScene from "../3DScenes/Illustrations3DScene";
import IllustrationPageAnim from "../Camera/Animations/IllustrationPageAnim";
// Debug UI
import DebugUi from "../Utilitaries/DebugUi/DebugUi";

export default function IllustrationsPage() {
  return (
    <div id="IllustrationsPage" className="relative">
      <div className="flex-column align-center absolute text">
        <h1>Illustrations</h1>
        <p>by Serotoninene</p>
      </div>

      <CanvasContainer
        fov={60}
        position={[0, 0, 4.7]}
        className="fixed"
        orthographicCam={false}
      >
        <Illustrations3DScene />
        <CameraControls on={false} />
        <IllustrationPageAnim />
      </CanvasContainer>
      <DebugUi />
    </div>
  );
}
