import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
//3D Components
import CanvasContainer from "../Camera/CanvasContainer";
import CameraControls from "../Camera/CameraControls";
import Illustrations3DScene from "../3DScenes/Illustrations3DScene";
import IllustrationPageAnim from "../Camera/Animations/IllustrationPageAnim";
// Debug UI
import DebugUi from "../Utilitaries/DebugUi/DebugUi";

export default function Test() {
  return (
    <div id="Test">
      <CanvasContainer fov={60} position={[0, 0, 5.5]}>
        <Illustrations3DScene />
        <CameraControls on={true} />
        <IllustrationPageAnim />
      </CanvasContainer>
      <DebugUi />
    </div>
  );
}
