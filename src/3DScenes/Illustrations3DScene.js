import React, { useEffect, useState, Suspense } from "react";
// react three fiber
import { useProgress } from "@react-three/drei";
// gsap
import gsap, { Power3 } from "gsap";
// 3D Components
import IllustrationPlane from "../3DElements/IllustrationPlane";
// Assets
import { illustrationsData } from "../Utilitaries/Data/illustrationsData";

export default function Illustrations3DScene(props) {
  const { progress } = useProgress();
  const [meshes, setMeshes] = useState([]);

  // Goes fetch and stocks the ref of the meshes in the children components
  const addMesh = (mesh) => {
    setMeshes((oldMesh) => [...oldMesh, mesh]);
  };

  // Position of each illustrations
  let positions = [
    {
      x: 3.7,
      y: 0.5,
      z: 0.1,
    },
    {
      x: 2.8,
      y: -2,
      z: 0.7,
    },
    {
      x: 2.2,
      y: 2,
      z: 0.5,
    },
    {
      x: 0.6,
      y: -1.5,
      z: -0.7,
    },
    {
      x: 0,
      y: 1.5,
      z: 0.9,
    },
    {
      x: -1.4,
      y: -1.2,
      z: 1,
    },
    {
      x: -2.5,
      y: 2,
      z: -0.4,
    },
    {
      x: -4.2,
      y: 1.2,
      z: 0.6,
    },
    {
      x: -3.9,
      y: -1.7,
      z: 0.2,
    },
  ];

  // Intro Anim
  useEffect(() => {
    // We wait till all the refs of the meshes are sent to the array
    // and when it's done we start the animation
    if (meshes.length === illustrationsData.length) {
      // intro anim
      const tl = gsap.timeline({
        ease: Power3,
        onComplete: () => {
          tl.kill();
        },
      });
      meshes.forEach((mesh) => {
        tl.to(
          mesh.current.material,
          {
            opacity: 1,
          },
          "<0.05"
        );
        tl.to(
          mesh.current.scale,
          {
            x: 1,
            y: 1,
          },
          "<"
        );
      });
    }
    return null;
  }, [meshes]);

  return (
    <Suspense fallback={null}>
      {illustrationsData.map((illu, id) => (
        <IllustrationPlane
          progress={progress}
          data={illu}
          key={id}
          position={positions[illu.id]}
          meshes={meshes}
          addMesh={addMesh}
        />
      ))}
    </Suspense>
  );
}
