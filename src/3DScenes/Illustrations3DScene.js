import React from "react";
// 3D Components
import IllustrationPlane from "../3DElements/IllustrationPlane";

// Assets
import { illustrationsData } from "../Utilitaries/Data/illustrationsData";

export default function Illustrations3DScene(props) {
  let positions = [
    { x: 3.5, y: 0.5, z: 0.9 },
    { x: 2.8, y: -2, z: 0.5 },
    { x: 2.32, y: 2, z: 0.5 },
    { x: 1, y: -2.7, z: 0.7 },
    { x: 0, y: 2, z: 1 },
    { x: -1, y: -2, z: 1 },
    { x: -2, y: 2.6, z: 0.4 },
    { x: -3.4, y: -1.7, z: 0.5 },
    { x: -3.7, y: 1.2, z: 0.6 },
  ];

  return illustrationsData.map((illu, id) => (
    <IllustrationPlane data={illu} key={id} position={positions[illu.id - 1]} />
  ));
}
