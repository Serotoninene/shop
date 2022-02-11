import React, { useState, useRef, useEffect } from "react";
// ThreeJs
import { TextureLoader } from "three/src/loaders/TextureLoader";
// React Three Fiber
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import WaveShaderMaterial from "../Utilitaries/Shaders/WaveShaderMaterial";
// Gsap
import gsap, { Power3 } from "gsap";
// Utils
import lerp from "../Utilitaries/Tools/lerp";

export default function WavyPlane(props) {
  const waveShaderRef = useRef();
  const { position } = props;
  const [image] = useLoader(TextureLoader, ["Venus.jpg"]);

  // Setting up the options for the debug ui
  const [opts, setOpts] = useState({
    // Uniforms of the wave Shader Material
    uNoiseFreq: 2.0,
    uNoiseAmp: 0.1,
    uSpeed: 0.8,
    uDistorsion: 0.5,
  });

  // Updating time in the mesh shader so it can animates
  useFrame(({ clock }) => {
    waveShaderRef.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh position={[position.posX, position.posY, 0]}>
      <planeBufferGeometry args={[1.627, 2.19, 50, 50]} />
      <waveShaderMaterial
        ref={waveShaderRef}
        uTexture={image}
        uNoiseFreq={opts.uNoiseFreq}
        uNoiseAmp={opts.uNoiseAmp}
        uSpeed={opts.uSpeed}
        uDistorsion={opts.uDistorsion}
        // wireframe={true}
      />
    </mesh>
  );
}
